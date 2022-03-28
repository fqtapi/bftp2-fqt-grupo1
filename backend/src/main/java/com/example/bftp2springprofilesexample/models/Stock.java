package com.example.bftp2springprofilesexample.models;

import javax.persistence.*;

@Entity
@Table(name = "stocks")
public class Stock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String codigo;
    @Lob
    private String descripcion;
    private String category;
    private int cantidad;
    private int add;
    private int subtract;


    public Stock(Long id, String codigo, String descripcion, String category, int cantidad, int add, int subtract) {
        this.id = id;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.category = category;
        this.cantidad = cantidad;
        this.add = add;
        this.subtract = subtract;
    }

    public Stock() {

    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public int getCantidad() {
        cantidad = cantidad + add;
        cantidad = cantidad - subtract;
        return cantidad;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getAdd() {
        return 0;
    }

    public void setAdd(int add) {
        this.add = add;
    }

    public int getSubtract() {
        return 0;
    }

    public void setSubtract(int subtract) {
        this.subtract = subtract;
    }

}