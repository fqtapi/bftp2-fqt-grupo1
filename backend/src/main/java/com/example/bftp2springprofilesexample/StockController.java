package com.example.bftp2springprofilesexample;

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

    @DeleteMapping("/delete/{id}")
    public Stock deleteStockById(@PathVariable Long id) {
        Stock stock = stockRepository.findById(id).orElseThrow(StockNotFoundException::new);
        stockRepository.deleteById(id);
        return stock;
    }

    @PutMapping("/{id}")
    public Stock updateStock(@RequestBody Stock stock) {
        stockRepository.findById(stock.getId()).orElseThrow(StockNotFoundException::new);
        return stockRepository.save(stock);
    }
}


