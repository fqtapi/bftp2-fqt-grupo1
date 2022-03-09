package com.example.bftp2springprofilesexample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

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

    @GetMapping("/category/prendas")
    public List<Stock> prendas(@RequestParam Map<String, String> category) {

        return stockRepository.findAllByCategoryContains("prendas");
    }

    @GetMapping("/category/complementos")
    public List<Stock> complementos(@RequestParam Map<String, String> parameters) {
        if (parameters.containsKey("complementos")) {
        }
        return stockRepository.findAllByCategoryContains("complementos");
    }

    @GetMapping("/category/accesorios")
    public String accesorios(@RequestParam Map<String, String> codigo) {
        if (codigo.containsKey("accesorios")) {
        }
        return String.valueOf(stockRepository.findAllByCategoryContains("accesorios"));
    }

    @GetMapping("/category/cosmeticos")
    public String cosmeticos(@RequestParam Map<String, String> parameters) {
        if (parameters.containsKey("cosmeticos")) {
        }
        return "No existe";
    }

}


