package com.jumia.Jumia.services;

import com.jumia.Jumia.models.product;
import java.util.List;

public interface productService {

    void addProduct(product product);

    void deleteProduct(int productId);

    void updateProductPrice(int productId, double price);

    void updateProductStock(int productId, int stock);

    void updateProductDescription(int productId, String description);

    List<product> getProductsByCategory(String categoryId);

    product getProductById(String productId);

    List<product> filterProductsByPrice(double minPrice, double maxPrice);

}
