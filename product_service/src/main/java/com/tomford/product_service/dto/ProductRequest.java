package com.tomford.product_service.dto;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.Size;
import lombok.Data;

/**
 * Types for data from client
 */
@Data
public class ProductRequest {
    private Long id;
    private String name;
    private String model;
    private String description;
    private Byte rating;
    private Long reviewsCount;
    private Integer price;
    private String volumes;
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
    private Integer selled;
    private String hoverImage;
    private boolean recommended;
}