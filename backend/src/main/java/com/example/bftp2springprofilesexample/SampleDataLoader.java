package com.example.bftp2springprofilesexample;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.List;

@Component
public class SampleDataLoader {

    @Autowired
    public SampleDataLoader(StockRepository stockRepository) {
        this.stockRepository = stockRepository;
    }

    private StockRepository stockRepository;

    @PostConstruct
    public void loadSampleData() {
        stockRepository.saveAll(List.of(
                new Stock(1L, "Prendas01", "Abrigos", 0),
                new Stock(2L, "Prendas02", "Chaquetas y americanas", 0),
                new Stock(3L, "Prendas03", "Faldas", 0),
                new Stock(4L, "Prendas04", "Pantalones", 0),
                new Stock(5L, "Prendas05", "Blusas, camisas", 0),
                new Stock(6L, "Prendas06", "Camisetas", 0),
                new Stock(7L, "Prendas07", "Jersey", 0),
                new Stock(8L, "Prendas08", "Chalecos", 0),
                new Stock(9L, "Prendas09", "Vestidos", 0),
                new Stock(10L, "Complementos01", "Zapatos", 0),
                new Stock(11L, "Complementos02", "Bolsos", 0),
                new Stock(12L, "Complementos03", "Bufandas / pañuelos", 0),
                new Stock(13L, "Complementos04", "Cinturones", 0),
                new Stock(14L, "Complementos05", "Sujetadores", 0),
                new Stock(15L, "Complementos06", "Medias", 0),
                new Stock(16L, "Accesorios", "Bisuteria", 0),
                new Stock(17L, "Schwarzkof01", "Desodorante", 0),
                new Stock(18L, "Schwarzkof02", "Crema hidratante facial", 0),
                new Stock(19L, "Schwarzkof03", "Shampoo", 0),
                new Stock(20L, "Schwarzkof04", "Mousse", 0),
                new Stock(21L, "Schwarzkof05", "Laca-fijador", 0),
                new Stock(22L, "Schwarzkof06", "Mascarilla de cabello", 0),
                new Stock(23L, "Schwarzkof07", "Tinte Cabello", 0),
                new Stock(24L, "Schwarzkof08", "Gel de baño", 0)
        ));
    }
}
