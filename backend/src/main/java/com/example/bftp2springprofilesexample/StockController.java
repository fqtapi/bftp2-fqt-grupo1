package com.example.bftp2springprofilesexample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class StockController {
    private final StockRepository stockRepository;

    @Autowired
    public StockController(StockRepository stockRepository) {
        this.stockRepository = stockRepository;
    }

    @GetMapping("/api/stocks")
    public List<Stock> allStocks(@RequestParam(required = false) String category) {

        if (category != null) {
            return stockRepository.findAllByCategoryContains(category);
        }
        return stockRepository.findAll();
    }

    @PostMapping("/api/stocks")
    public Stock addStock(@RequestBody Stock stock) {
        return stockRepository.save(stock);
    }

    @GetMapping("/api/stocks/{id}")
    public Stock findStock(@PathVariable Long id){
        return stockRepository.findById(id).orElseThrow(null);
    }

    @PutMapping("/api/stocks/{id}")
    public Stock updateStock(@RequestBody Stock stock) {
        stockRepository.findById(stock.getId()).orElseThrow(StockNotFoundException::new);
        return stockRepository.save(stock);
    }
}


