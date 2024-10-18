package com.jumia.Jumia.services;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.jumia.Jumia.models.product;
import com.jumia.Jumia.repositries.productRepositry;
import java.util.List;
import java.util.ArrayList;

@Service
@CrossOrigin(origins = "http://localhost:3000")

public class productServiceImpl implements productService {

    private productRepositry productRepositry;

    public productServiceImpl(productRepositry productRepositry) {
        this.productRepositry = productRepositry;
    }

    public void addProduct(product product) {
        productRepositry.save(product);
    }

    public product getProductById(String id) {
        return productRepositry.findById(id).get();
    }

    public void deleteProduct(int id) {
        productRepositry.deleteById(String.valueOf(id));
    }

    public void updateProductPrice(int id, double price) {
        product product = productRepositry.findById(String.valueOf(id)).get();
        product.setPrice(price);
        productRepositry.save(product);
    }

    public void updateProductStock(int id, int stock) {
        product product = productRepositry.findById(String.valueOf(id)).get();
        product.setStock(stock);
        productRepositry.save(product);
    }

    public void updateProductDescription(int id, String description) {
        product product = productRepositry.findById(String.valueOf(id)).get();
        product.setDescription(description);
        productRepositry.save(product);
    }

    public List<product> getProductsByCategory(String categoryId) {
        return productRepositry.findByCategoryId(categoryId);
    }

    public List<product> filterProductsByPrice(double minPrice, double maxPrice) {
        List<product> products = productRepositry.findAll();
       
        for (product product : products) {
            if (product.getPrice() < minPrice || product.getPrice() > maxPrice) {
                products.remove(product);
            }
        }

        return products;
    }
}
