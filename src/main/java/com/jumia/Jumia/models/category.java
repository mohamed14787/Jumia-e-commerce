package com.jumia.Jumia.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "categories")
public class category {
    
    
    private String name;
    private String description;
    @Id
    private String categoryId;

    public category(String name, String description, String categoryId) {
        this.name = name;
        this.description = description;
        this.categoryId = categoryId;
    }



    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategoryId() {
        return this.categoryId;
    }

    public void setCategoryId(String categoryId) {
        this.categoryId = categoryId;
    }


}
