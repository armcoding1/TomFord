package com.tomford.product_service.controller;

import com.tomford.product_service.dto.ProductRequest;
import com.tomford.product_service.model.Product;
import com.tomford.product_service.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * Product controller for working with client and database and REST API
 * Requests coming in /products
 */
@RestController
@RequestMapping("/products")
public class ProductController {
    /**
     * injecting product service for using his methods
     */
    @Autowired
    private ProductService productService;

    /**
     * Post request for create product
     *
     * @param productRequest data from client for creating product
     * @return new product with type {@link Product}
     */
    @PostMapping("/create")
    public ResponseEntity<Product> createProduct(@RequestBody ProductRequest productRequest) {
        Product product = productService.createProduct(productRequest);
        return ResponseEntity.ok(product);
    }

    /**
     * Request for receiving all products from database
     *
     * @return all products with type Array {@link Product}
     */
    @GetMapping("/getAll")
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    /**
     * Request for receiving product from database by id from url
     *
     * @param id from url for receiving product from database
     * @return product with type Optional {@link Product}
     */
    @GetMapping("/getById/{id}")
    public ResponseEntity<Optional<Product>> getProductById(@PathVariable Long id) {
        Optional<Product> products = productService.getProductById(id);
        return ResponseEntity.ok(products);
    }

    /**
     * Request for receiving products from database with category
     *
     * @param category from url for receiving product wit category
     * @return products with type Array {@link Product}
     */
    @GetMapping("/getByCategory/{category}")
    public List<Product> getProductsByCategory(@PathVariable String category) {
        return productService.getProductsByCategory(category);
    }

    /**
     * Request for deleting product from database
     *
     * @param id from url for deleting product, type Long
     */
    @DeleteMapping("/delete/{id}")
    public void deleteProductById(@PathVariable Long id) {
        productService.deleteProductById(id);
    }

    @PutMapping("/update/{id}")
    public Product updateProductById(@PathVariable Long id, @RequestBody ProductRequest productRequest) {
        return productService.updateProduct(id, productRequest);
    }
}
