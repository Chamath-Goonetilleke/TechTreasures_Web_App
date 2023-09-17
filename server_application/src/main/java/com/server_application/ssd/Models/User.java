package com.server_application.ssd.Models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="user")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User {

    public enum UserRole {
        USER, ADMIN
    }

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private  String name;
    private String email;
    private String password;
    private String userRole;

}
