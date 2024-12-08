package com.jumia.Jumia.repositries;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.jumia.Jumia.models.user;
import java.util.Optional;


public interface userRepositry  extends MongoRepository<user, String>
{
    user findByName(String name);

    
}
