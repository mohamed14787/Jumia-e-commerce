package com.jumia.Jumia.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.jumia.Jumia.models.category;
import com.jumia.Jumia.repositries.categoryRepositry;
@Service
@CrossOrigin(origins = "http://localhost:3000")

public class categoryServiceImpl implements categoryService {
    private categoryRepositry categoryRepositry;

    public categoryServiceImpl(categoryRepositry categoryRepositry) {
        this.categoryRepositry = categoryRepositry;
    }

    
    @Override
    public List<category> getCategories( ) {
        return categoryRepositry.findAll();
    }

    @Override
    public void addCategory(category category) {
        categoryRepositry.save(category);
    }

    @Override
    public void deleteCategory( int id ) {
        categoryRepositry.deleteById(id+"");
        
  
    }

    @Override
public void updateCategory(category category) {
    if (categoryRepositry.existsById(category.getName())) {
        categoryRepositry.save(category);  // Save if the category exists
    
}
}

@Override
public category getCategory(String id) {
    return categoryRepositry.findById(id).get();
}
}
