package com.server_application.ssd.Models;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="items")
public class Item {

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String price;
    private String description;
    private int quantity;
   @ElementCollection
    private List<String> imageUrls;

    public Item() {
    }

    public Item(int id, String name, String price, String description, int quantity, List<String> imageUrls) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
        this.imageUrls = imageUrls;
    }

    public Item(String name, String price, String description, int quantity, List<String> imageUrls) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
        this.imageUrls = imageUrls;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int count) {
        this.quantity = count;
    }

    public List<String> getImageUrls() {
        return imageUrls;
    }

    public void setImageUrls(List<String> imageUrl) {
        this.imageUrls = imageUrl;
    }
}
