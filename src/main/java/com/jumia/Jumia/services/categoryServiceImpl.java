package com.jumia.Jumia.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.jumia.models.category;
@Service
public class categoryServiceImpl implements categoryService {

    private List<category> categories = new ArrayList<>();
    
    @Override
    public List<category> getCategories() {
        return this.categories;
    }

    @Override
    public void addCategory(category category) {
        this.categories.add(category);
    }

    @Override
    public void deleteCategory(int id) {
       
        for (category c : categories) {
            if (c.getCategoryId() == id) {
                categories.remove(c);
                break;
            }
        }


        
    }

    @Override
    public void updateCategory(category category) {
        for (category c : categories) {
            if (c.getCategoryId() == category.getCategoryId()) {
                categories.remove(c);
                categories.add(category);
                break;
            }
        }
    }
    

}
