package com.example.bftp2springprofilesexample;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StockRepository extends JpaRepository<Stock,Long> {
      List<Stock> findAllByCategoryContains(String category);
}
