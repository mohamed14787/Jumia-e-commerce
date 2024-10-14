package com.jumia.Jumia.services;
import java.util.List;
import com.jumia.Jumia.models.user;

public interface userService {

    public void addCustomer(user user);

    public void deleteCustomer(int id);

    public void updateCustomer(user user);

    public List<user> getCustomers();

    public user getCustomer(String id);

}
