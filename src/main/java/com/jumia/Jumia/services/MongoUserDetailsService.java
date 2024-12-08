package com.jumia.Jumia.services;

import com.jumia.Jumia.models.user; // Adjust based on your actual UserEntity class
import com.jumia.Jumia.repositries.userRepositry; // Adjust based on your actual UserRepository
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MongoUserDetailsService implements UserDetailsService {

    @Autowired
    private userRepositry userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        user userEntity = userRepository.findByName(username);
        if (userEntity == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        return org.springframework.security.core.userdetails.User.withUsername(userEntity.getName())
                .password(userEntity.getPassword())
                .roles(userEntity.getRole()) // Assuming roles are stored in a single string
                .build();
    }
}
