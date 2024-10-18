package com.jumia.Jumia.repositries;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.jumia.Jumia.models.product;
import java.util.Optional;
import java.util.List;

public interface productRepositry extends MongoRepository<product, String> {
 
    List<product> findByCategoryId(String categoryId);
}
