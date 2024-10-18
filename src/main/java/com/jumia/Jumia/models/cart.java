package com.jumia.Jumia.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.ArrayList;
import java.util.List;
import com.jumia.Jumia.models.product;

@Document(collection = "carts")
public class cart {
    @Id
    private String cartId;
    private List<product> products;

    public cart(String cartId) {
        this.cartId = cartId;
        this.products = new ArrayList<product>();
    }


    public String getCartId() {
        return this.cartId;
    }

    public void setCartId(String cartId) {
        this.cartId = cartId;
    }

    public List<product> getProducts() {
        return this.products;
    }

    public void setProducts(List<product> products) {
        this.products = products;
    }



}
