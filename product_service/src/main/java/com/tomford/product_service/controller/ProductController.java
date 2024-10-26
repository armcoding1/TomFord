package com.tomford.product_service.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tomford.product_service.dto.ProductRequest;
import com.tomford.product_service.model.Product;
import com.tomford.product_service.service.ProductService;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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

    @Autowired
    private RabbitTemplate rabbitTemplate;

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

    /**
     * Request for updating product in the database by id
     *
     * @param id             from url for updating product
     * @param productRequest new updated product data from client
     * @return new updated product with type {@link Product}
     */
    @PutMapping("/update/{id}")
    public Product updateProductById(@PathVariable Long id, @RequestBody ProductRequest productRequest) {
        return productService.updateProduct(id, productRequest);
    }

    /**
     * Request for receiving top 3 products ordered by selled count
     *
     * @return list of top 3 products
     */
    @GetMapping("/getTop3")
    public List<Product> getTop3ProductsBySelled() {
        return productService.getTop3ProductsBySelled();
    }

    @PostMapping("/send")
    public String sendHelloMessage() throws Exception {
        List<Product> products = productService.getTop3ProductsBySelled();
        ObjectMapper objectMapper = new ObjectMapper();
        String messages = objectMapper.writeValueAsString(products);
        rabbitTemplate.convertAndSend("hello-queue", messages);
        return "Message sent to RabbitMQ queue!";
    }

    /**
     * Request for receive products from database by name
     *
     * @param name from client
     * @return Products array, type {@link Product}
     */
    @GetMapping("/getByName/{name}")
    public List<Product> getByName(@PathVariable String name) {
        String[] splitedName;
        if (name.contains("_")) {
            splitedName = name.split("_");

            String joinedName = Arrays.stream(splitedName)
                    .map(String::toUpperCase)
                    .collect(Collectors.joining(" "));
            return productService.findByName(joinedName);
        }

        return productService.findByName(name.toUpperCase());
    }
}