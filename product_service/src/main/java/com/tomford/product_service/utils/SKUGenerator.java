package com.tomford.product_service.utils;

import org.apache.commons.lang3.RandomStringUtils;

/**
 * Utility class for generating Stock Keeping Units (SKUs).
 * <p>
 * This class provides a method to generate random numeric SKUs of a specified length.
 * </p>
 */
public class SKUGenerator {
    /**
     * Generates a random numeric SKU of the specified length.
     *
     * @param length The length of the SKU to be generated. Must be greater than 0.
     * @return A randomly generated SKU consisting of numeric characters.
     * @throws IllegalArgumentException if the specified length is less than or equal to zero.
     */
    public static String generateSKU(int length) {
        if (length <= 0) {
            throw new IllegalArgumentException("Length must be greater than 0");
        }
        return RandomStringUtils.randomNumeric(length);
    }
}
