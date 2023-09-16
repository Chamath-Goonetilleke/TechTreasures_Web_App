package com.server_application.ssd.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="items")
public class Items {

    @Id
    @Column(name = "id", nullable = false)
    private int id;
    private String name;
    private String price;
    private String description;
    private int count;

    public Items(int id, String name, String price, String description, int count) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.count = count;
    }

    public Items(String name, String price, String description, int count) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.count = count;
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

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }
}
