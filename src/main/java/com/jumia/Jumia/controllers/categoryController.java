package com.jumia.Jumia.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RestController;

import com.jumia.Jumia.repositries.categoryRepositry;
import com.jumia.Jumia.services.categoryService;
import com.jumia.models.category;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;




@RestController
public class categoryController {

    private categoryService categoryService;
    private categoryRepositry categoryRepositry;
    
    public categoryController(categoryService categoryService, categoryRepositry categoryRepositry) {
        this.categoryService = categoryService;
        this.categoryRepositry = categoryRepositry;
    }
    
   
    @GetMapping("/api/public/categories")
    public List<category> getCategories() {
        return categoryRepositry.findAll();
    }

    @PostMapping("/api/admin/categories")
    public String addCategory(@RequestBody category c) {
        //TODO: process POST request
    categoryRepositry.save(c);        
        return "category added";
    }

    @PutMapping("/api/admin/categories/{id}")
    public String putMethodName(@PathVariable String id, @RequestBody category c) {
        //TODO: process PUT request
     categoryRepositry.save(c);        
        return "category updated";
    }

    @DeleteMapping("/api/admin/categories/{id}")
    public String deleteCategory(@PathVariable int id) {
        categoryRepositry.deleteById(""+id);
        return "category deleted";
    }
    

}
