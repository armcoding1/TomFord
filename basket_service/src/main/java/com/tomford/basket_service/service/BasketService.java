package com.tomford.basket_service.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tomford.basket_service.dto.Product;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BasketService {
    private final ObjectMapper objectMapper = new ObjectMapper();

    @RabbitListener(queues = "hello-queue")
    public void listen(String message) {
        try {
            List<Product> products = objectMapper.readValue(message, new TypeReference<List<Product>>() {
            });

            for (Product product : products) {
                System.out.println("Received products: " + product.getModel());
            }
        } catch (Exception e) {
            System.err.println("Error while processing message: " + e.getMessage());
        }
    }
}
