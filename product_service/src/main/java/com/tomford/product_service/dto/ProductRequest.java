package com.tomford.product_service.dto;

import lombok.Data;

/**
 * Types for data from client
 */
@Data
public class ProductRequest {
    private String name;
    private String model;
    private String description;
    private Byte rating;
    private Long reviewsCount;
    private Integer price;
    private Short size;
    private Integer stockQuantity;
    private Boolean available;
    private String details;
    private Byte discount;
    private String tags;
    private String color;
    private Double weight;
    private String ingredients;
    private String videoUrl;
    private String galleryImages;
    private String mainImage;
    private String skuCode;
    private String category;
}
