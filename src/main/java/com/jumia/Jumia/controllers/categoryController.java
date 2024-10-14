package com.jumia.Jumia.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RestController;

import com.jumia.Jumia.models.category;
import com.jumia.Jumia.repositries.categoryRepositry;
import com.jumia.Jumia.services.categoryService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;




@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class categoryController {

    private categoryService categoryService;
    private categoryRepositry categoryRepositry;
    
    public categoryController(categoryService categoryService, categoryRepositry categoryRepositry) {
        this.categoryService = categoryService;
    }
    
   
    @GetMapping("/api/public/categories")
    public List<category> getCategories() {
        return categoryService.getCategories();
    }

    @PostMapping("/api/admin/categories")
    public String addCategory(@RequestBody category c) {
        //TODO: process POST request
    categoryService.addCategory(c);        
        return "category added";
    }

    @PutMapping("/api/admin/categories")
    public String putMethodName( @RequestBody category c) {
        //TODO: process PUT request
        categoryService.updateCategory(c);
        return "category updated";
    }

    @DeleteMapping("/api/admin/categories/{id}")
    public String deleteCategory(@PathVariable int id) {
        categoryService.deleteCategory(id);
        return "category deleted";
    }
    

}
