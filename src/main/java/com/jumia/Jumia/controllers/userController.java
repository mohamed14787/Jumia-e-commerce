package com.jumia.Jumia.controllers;
import com.jumia.Jumia.services.userService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jumia.Jumia.models.cart;
import com.jumia.Jumia.models.user;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class userController {

    private userService userService;

    public userController(userService userService) {
        this.userService = userService;
    }
    
    @PostMapping("/api/admin/customers")
    public String addCustomer(@RequestBody user user) {
        userService.addCustomer(user);
        return "customer added";
    }


    @GetMapping("/api/public/customers/{id}")
    public user getCustomer(@PathVariable String id) {
        return userService.getCustomer(id);
    }

    @DeleteMapping("/api/admin/customers/{id}")
    public void deleteCustomer(@PathVariable int id) {
        userService.deleteCustomer(id);
    }
 
   

    @PutMapping("api/public/customers/password/{id}")
    public void updatePassword(@RequestBody String password, @PathVariable String id) {
        user user = userService.getCustomer(id);
        user.setPassword(password);
        userService.updateCustomer(user);
    }
   
    @PutMapping("api/public/customers/phoneNumber/{id}")
    public void updatePhoneNumber(@RequestBody String phoneNumber, @PathVariable String id) {
        user user = userService.getCustomer(id);
        user.setPhoneNumber(phoneNumber);
        userService.updateCustomer(user);
    }

    @PutMapping("api/public/customers/address/{id}")
    public void updateAddress(@RequestBody String address, @PathVariable String id) {
        user user = userService.getCustomer(id);
        user.setAddress(address);
        userService.updateCustomer(user);
    }

    @GetMapping("/api/public/customers/cart/{id}")  
    public cart getCart(@PathVariable String id) {
        return userService.getCustomer(id).getCart();
    }

}
