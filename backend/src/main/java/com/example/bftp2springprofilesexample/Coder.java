package com.example.bftp2springprofilesexample;

import javax.persistence.*;

@Entity
@Table(name="coders")
public class Coder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;

    public Coder(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public Coder() {

    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
