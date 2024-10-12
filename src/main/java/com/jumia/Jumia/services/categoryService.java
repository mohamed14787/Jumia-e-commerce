package com.jumia.Jumia.services;

import java.util.List;

import com.jumia.models.category;

public interface categoryService {
        
        public List<category> getCategories();
        
       
        
        public void addCategory(category category);

        public void deleteCategory(int id);

        public void updateCategory(category category);
        
       

}
