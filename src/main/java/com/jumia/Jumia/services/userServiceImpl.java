package com.jumia.Jumia.services;

import com.jumia.Jumia.models.user;
import com.jumia.Jumia.repositries.userRepositry;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service

public class userServiceImpl implements userService {
    private userRepositry userRepositry;

    public userServiceImpl(userRepositry userRepositry) {
        this.userRepositry = userRepositry;
    }

    public void addCustomer(user user) {

        userRepositry.save(user);
    }

    public void deleteCustomer(int id) {
        // TODO Auto-generated method stub

        userRepositry.deleteById(id + "");
    }

    public void updateCustomer(user user) {
        // TODO Auto-generated method stub

        if (userRepositry.existsById(user.getUserId())) {
            userRepositry.save(user); // Save if the user exists

        }
    }

    public List<user> getCustomers() {
        // TODO Auto-generated method stub

        return userRepositry.findAll();
    }

    public user getCustomer(String id) {
        // TODO Auto-generated method stub

        return userRepositry.findById(id + "").get();

    }
        

   
}
