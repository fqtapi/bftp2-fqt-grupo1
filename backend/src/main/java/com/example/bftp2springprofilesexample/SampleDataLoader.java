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
                new Stock(1L, "Prendas01", "Abrigos", "Prendas", 0),
                new Stock(2L, "Prendas02", "Chaquetas y americanas", "Prendas",0),
                new Stock(3L, "Prendas03", "Faldas", "Prendas",0),
                new Stock(4L, "Prendas04", "Pantalones", "Prendas", 0),
                new Stock(5L, "Prendas05", "Blusas, camisas", "Prendas",0),
                new Stock(6L, "Prendas06", "Camisetas", "Prendas",0),
                new Stock(7L, "Prendas07", "Jersey", "Prendas",0),
                new Stock(8L, "Prendas08", "Chalecos", "Prendas",0),
                new Stock(9L, "Prendas09", "Vestidos", "Prendas",0),
                new Stock(10L, "Complementos01", "Zapatos", "Complementos",0),
                new Stock(11L, "Complementos02", "Bolsos", "Complementos",0),
                new Stock(12L, "Complementos03", "Bufandas / pañuelos", "Complementos",0),
                new Stock(13L, "Complementos04", "Cinturones", "Complementos",0),
                new Stock(14L, "Complementos05", "Sujetadores", "Complementos",0),
                new Stock(15L, "Complementos06", "Medias", "Complementos",0),
                new Stock(16L, "Accesorios01", "Bisuteria", "Accesorios",0),
                new Stock(17L, "Cosméticos01", "Desodorante", "Cosmeticos", 0),
                new Stock(18L, "Cosméticos02", "Crema hidratante facial", "Cosmeticos",0),
                new Stock(19L, "Cosméticos03", "Shampoo", "Cosmeticos",0),
                new Stock(20L, "Cosméticos04", "Mousse", "Cosmeticos",0),
                new Stock(21L, "Cosméticos05", "Laca-fijador", "Cosmeticos",0),
                new Stock(22L, "Cosméticos06", "Mascarilla de cabello", "Cosmeticos",0),
                new Stock(23L, "Cosméticos07", "Tinte Cabello", "Cosmeticos",0),
                new Stock(24L, "Cosméticos08", "Gel de baño", "Cosmeticos",0)
        ));
    }
}
