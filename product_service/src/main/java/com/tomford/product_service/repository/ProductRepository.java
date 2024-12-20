package com.tomford.product_service.repository;

import com.tomford.product_service.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Product repository for working to postgresql
 */
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCategory(String category);

    List<Product> findTop3ByOrderBySelledDesc();

    List<Product> findByName(String name);

    List<Product> findTop3ByRecommendedTrue();
}