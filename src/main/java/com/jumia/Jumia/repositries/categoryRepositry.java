package com.jumia.Jumia.repositries;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.jumia.Jumia.models.category;

public interface categoryRepositry  extends MongoRepository<category, String>
{


}
