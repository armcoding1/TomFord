package com.tomford.product_service.interfaces;

import com.tomford.product_service.dto.ProductRequest;
import com.tomford.product_service.model.Product;

import java.util.List;
import java.util.Optional;

/**
 * Product interface for working with database effectively
 */
public interface Productable {
    /**
     * Method for creating new product
     *
     * @param productRequest data from client
     * @return new product with type {@link Product}
     */
    Product createProduct(ProductRequest productRequest);

    /**
     * Method for receiving all products from database
     *
     * @return all products with type Array {@link Product}
     */
    List<Product> getAllProducts();

    /**
     * Method for receiving product from database by id from url
     *
     * @param id from client for receiving product from database by id
     * @return product with type {@link Product}
     */
    Optional<Product> getProductById(Long id);

    /**
     * Method for receiving products from database with category
     *
     * @param category from url for receiving product wit category
     * @return products with type Array {@link Product}
     */
    List<Product> getProductsByCategory(String category);

    /**
     * Method for deleting product from database by id
     *
     * @param id from url for deleting product from database, type Long
     */
    void deleteProductById(Long id);

    /**
     * @param id             from url for updating product
     * @param productRequest new updated product data from client
     * @return new updated product with type {@link Product}
     */
    Product updateProduct(Long id, ProductRequest productRequest);

    /**
     * Method for receiving top 3 products ordered by selled count
     *
     * @return list of top 3 products
     */
    List<Product> getTop3ProductsBySelled();
}