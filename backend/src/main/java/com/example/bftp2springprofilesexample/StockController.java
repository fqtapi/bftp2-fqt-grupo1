package com.example.bftp2springprofilesexample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StockController {
    private StockRepository stockRepository;

    @Autowired
    public StockController(StockRepository stockRepository) {
        this.stockRepository = stockRepository;
    }

    @GetMapping("/stocks")
    public List<Stock> allStocks() {
        return stockRepository.findAll();
    }

    @GetMapping("/prueba")
    public List<Stock> getPrueba() {
        return stockRepository.findAll();
    }
}
