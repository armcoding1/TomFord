package com.tomford.product_service.service;

import com.tomford.product_service.dto.ProductRequest;
import com.tomford.product_service.interfaces.Productable;
import com.tomford.product_service.model.Product;
import com.tomford.product_service.repository.ProductRepository;
import com.tomford.product_service.utils.SKUGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Product service for creating basic logic for products and working from controllers
 */
@Service
public class ProductService implements Productable {
    /**
     * Import repository for working with database
     */
    @Autowired
    private ProductRepository productRepository;

    /**
     * Method for creating and saving product in the database
     *
     * @param productRequest from client, type {@link Product}
     * @return product with type {@link Product}
     */
    public Product createProduct(ProductRequest productRequest) {
        Product savedProduct = null;
        try {
            Product product = Product.builder().name(productRequest.getName()).model(productRequest.getModel()).description(productRequest.getDescription()).rating(productRequest.getRating()).reviewsCount(productRequest.getReviewsCount()).price(productRequest.getPrice()).volumes(productRequest.getVolumes()).stockQuantity(productRequest.getStockQuantity()).available(productRequest.getAvailable()).details(productRequest.getDetails()).discount(productRequest.getDiscount()).tags(productRequest.getTags()).color(productRequest.getColor()).weight(productRequest.getWeight()).ingredients(productRequest.getIngredients()).videoUrl(productRequest.getVideoUrl()).galleryImages(productRequest.getGalleryImages()).mainImage(productRequest.getMainImage()).skuCode(SKUGenerator.generateSKU(8)).category(productRequest.getCategory()).selled(0).hoverImage(productRequest.getHoverImage()).build();
            savedProduct = productRepository.save(product);
        } catch (Exception e) {
            System.out.println("Error creating product");
            e.printStackTrace();
        }
        return savedProduct;
    }

    /**
     * Method for receiving all products from database ith type Array {@link Product}
     *
     * @return all products with type Array {@link Product}
     */
    public List<Product> getAllProducts() {
        List<Product> products = productRepository.findAll();
        if (products.isEmpty()) {
            System.out.println("Products not found in the database");
        }
        return products;
    }

    /**
     * Method for receiving product from database by id
     *
     * @param id from url for receiving product from database by id;
     * @return product with type Optional {@link Product}
     */
    public Optional<Product> getProductById(Long id) {
        Optional<Product> product = productRepository.findById(id);
        if (product.isEmpty()) {
            System.out.println("Product with this id not found");
        }
        return product;
    }

    /**
     * Method for receiving products from database with category
     *
     * @param category from url for receiving product wit category
     * @return products with type Array {@link Product}
     */
    public List<Product> getProductsByCategory(String category) {
        List<Product> products = productRepository.findByCategory(category);
        return products;
    }

    /**
     * Method for deleting product from database by id
     *
     * @param id from url for deleting product, type Long
     */
    public void deleteProductById(Long id) {
        productRepository.deleteById(id);
    }

    /**
     * Method for updating product in the database by id
     *
     * @param id             from url for updating product
     * @param productRequest new updated product data from client
     * @return new updated product with type {@link Product}
     */
    public Product updateProduct(Long id, ProductRequest productRequest) {
        return productRepository.findById(id).map(existingProduct -> {
            existingProduct.setName(productRequest.getName());
            existingProduct.setModel(productRequest.getModel());
            existingProduct.setDescription(productRequest.getDescription());
            existingProduct.setRating(productRequest.getRating());
            existingProduct.setReviewsCount(productRequest.getReviewsCount());
            existingProduct.setPrice(productRequest.getPrice());
            existingProduct.setVolumes(productRequest.getVolumes());
            existingProduct.setStockQuantity(productRequest.getStockQuantity());
            existingProduct.setAvailable(productRequest.getAvailable());
            existingProduct.setDetails(productRequest.getDetails());
            existingProduct.setDiscount(productRequest.getDiscount());
            existingProduct.setTags(productRequest.getTags());
            existingProduct.setColor(productRequest.getColor());
            existingProduct.setWeight(productRequest.getWeight());
            existingProduct.setIngredients(productRequest.getIngredients());
            existingProduct.setVideoUrl(productRequest.getVideoUrl());
            existingProduct.setGalleryImages(productRequest.getGalleryImages());
            existingProduct.setMainImage(productRequest.getMainImage());
            existingProduct.setSkuCode(SKUGenerator.generateSKU(8));
            existingProduct.setCategory(productRequest.getCategory());
            existingProduct.setHoverImage(productRequest.getHoverImage());
            return productRepository.save(existingProduct);
        }).orElse(null);
    }

    /**
     * Method for receiving top 3 products ordered by selled count
     *
     * @return list of top 3 products
     */
    public List<Product> getTop3ProductsBySelled() {
        return productRepository.findTop3ByOrderBySelledDesc();
    }

    /**
     * Method for receive products from database by name
     *
     * @param name from client
     * @return Products array, type {@link Product}
     */
    public List<Product> findByName(String name) {
        List<Product> products = productRepository.findByName(name);
        if (products.isEmpty()) {
            System.out.println("Products not found with this name");
        }
        return products;
    }

    public List<Product> findTop3ByRecommendedTrue() {
        return productRepository.findTop3ByRecommendedTrue();
    }
}
