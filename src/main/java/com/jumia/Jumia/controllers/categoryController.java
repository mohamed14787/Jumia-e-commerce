package com.jumia.Jumia.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RestController;

import com.jumia.Jumia.models.category;
import com.jumia.Jumia.models.user;
import com.jumia.Jumia.repositries.categoryRepositry;
import com.jumia.Jumia.services.categoryService;
import com.jumia.Jumia.services.userService;
import com.jumia.Jumia.services.userServiceImpl;
import com.jumia.Jumia.jwt.LoginResponse;
import com.jumia.Jumia.jwt.LoginRequest;
import com.jumia.Jumia.jwt.JwtUtils;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.HashMap;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;




@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class categoryController {

    private categoryService categoryService;
    private categoryRepositry categoryRepositry;


     @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private AuthenticationManager authenticationManager;
    
    public categoryController(categoryService categoryService, categoryRepositry categoryRepositry) {
        this.categoryService = categoryService;
        this.categoryRepositry = categoryRepositry;
    }
    
   
    @GetMapping("/api/public/categories")
    public List<category> getCategories() {
        return categoryService.getCategories();
    }

    @GetMapping("/api/public/categories/{id}")
    public category getCategory(@PathVariable String id) {
        System.out.println("category id: ");
        return categoryService.getCategory(id);
    }

    @PostMapping("/api/admin/categories")
    public String addCategory(@RequestBody category c) {
        //TODO: process POST request
    categoryService.addCategory(c);        
        return "category added";
    }

    @PutMapping("/api/admin/categories")
    public String updateCategory( @RequestBody category c) {
        //TODO: process PUT request
        categoryService.updateCategory(c);
        return "category updated";
    }

    @DeleteMapping("/api/admin/categories/{id}")
    public String deleteCategory(@PathVariable int id) {
        categoryService.deleteCategory(id);
        return "category deleted";
    }

     @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
        Authentication authentication;
        try {
            authentication = authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
        } catch (AuthenticationException exception) {
            Map<String, Object> map = new HashMap<>();
            map.put("message", "Bad credentials");
            map.put("status", false);
            return new ResponseEntity<Object>(map, HttpStatus.NOT_FOUND);
        }

        SecurityContextHolder.getContext().setAuthentication(authentication);

        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        String jwtToken = jwtUtils.generateTokenFromUsername(userDetails);

        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        LoginResponse response = new LoginResponse(userDetails.getUsername(), roles, jwtToken);

        return ResponseEntity.ok(response);
    }
}
