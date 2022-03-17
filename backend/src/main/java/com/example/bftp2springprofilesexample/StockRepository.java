package com.example.bftp2springprofilesexample;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Transactional
public interface StockRepository extends JpaRepository<Stock,Long> {
      List<Stock> findAllByCategoryContains(String category);
}
