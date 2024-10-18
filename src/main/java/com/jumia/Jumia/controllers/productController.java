package com.jumia.Jumia.controllers;

import org.springframework.beans.propertyeditors.StringArrayPropertyEditor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.jumia.Jumia.models.product;
import com.jumia.Jumia.services.productService;

@RestController 
@CrossOrigin(origins = "http://localhost:3000")

public class productController {

    private productService productService;

    public productController(productService productService) {
        this.productService = productService;
    }

    @GetMapping("/api/public/products/{id}")
    public product getProduct(@PathVariable String id) {
        return productService.getProductById(id);
    }


    @GetMapping("/api/public/products/category/{categoryId}")
    public List<product> getProductsByCategory(@PathVariable String categoryId) {
        return productService.getProductsByCategory(categoryId);
    }

    @PostMapping("/api/admin/products")
    public String addProduct(@RequestBody product product) {
        productService.addProduct(product);
        return "product added";
    }


    @PutMapping("/api/admin/products/price/{id}")
    public String updateProductPrice(@PathVariable int id, @RequestBody double price) {
        productService.updateProductPrice(id, price);
        return "product price updated";
    }

    @PutMapping("/api/admin/products/stock/{id}")
    public String updateProductStock(@PathVariable int id, @RequestBody int stock) {
        productService.updateProductStock(id, stock);
        return "product stock updated";
    }

    @PutMapping("/api/admin/products/description/{id}")
    public String updateProductDescription(@PathVariable int id, @RequestBody String description) {
        productService.updateProductDescription(id, description);
        return "product description updated";
    }

    @GetMapping("/api/public/products/filter")
    public List<product> filterProductsByPrice(@RequestBody double minPrice, @RequestBody double maxPrice) {
        return productService.filterProductsByPrice(minPrice, maxPrice);
    }



}
