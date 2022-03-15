package com.example.bftp2springprofilesexample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
@RequestMapping("/stocks")
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
    public Stock createStock(@RequestBody Stock stock) {
        return stockRepository.save(stock);
    }
    @PutMapping("/{id}")
    public Stock updateStock(@RequestBody Stock stock) {
        stockRepository.findById(stock.getId()).orElseThrow(ExperienceNotFoundException::new);
        return stockRepository.save(stock);
    }


}


