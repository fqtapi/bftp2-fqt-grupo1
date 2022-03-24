package com.example.bftp2springprofilesexample.controllers;

import com.example.bftp2springprofilesexample.models.Stock;
import com.example.bftp2springprofilesexample.StockNotFoundException;
import com.example.bftp2springprofilesexample.repositories.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/stocks")
@RestController
public class StockController {
    private final StockRepository stockRepository;

    @Autowired
    public StockController(StockRepository stockRepository) {
        this.stockRepository = stockRepository;
    }

    @GetMapping
    public List<Stock> allStocks(@RequestParam(required = false) String category) {

        if (category != null) {
            return stockRepository.findAllByCategoryContains(category);
        }
        return stockRepository.findAll();
    }

    @PostMapping
    public Stock addStock(@RequestBody Stock stock) {
        return stockRepository.save(stock);
    }

    @GetMapping("/{id}")
    public Stock findStock(@PathVariable Long id){
        return stockRepository.findById(id).orElseThrow(null);
    }

    @PutMapping("/{id}")
    public Stock updateStockById(@RequestBody Stock stock) {
        stockRepository.findById(stock.getId()).orElseThrow(StockNotFoundException::new);
        return stockRepository.save(stock);
    }

    @PutMapping
    public Stock updateStock(@RequestBody Stock stock) {
        stockRepository.findById(stock.getId()).orElseThrow(StockNotFoundException::new);
        return stockRepository.save(stock);
    }

    @DeleteMapping("/delete/{id}")
    public Stock deleteStockById(@PathVariable Long id) {
        Stock stock = stockRepository.findById(id).orElseThrow(StockNotFoundException::new);
        stockRepository.deleteById(id);
        return stock;
    }
}


