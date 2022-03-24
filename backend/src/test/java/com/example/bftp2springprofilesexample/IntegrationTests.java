package com.example.bftp2springprofilesexample;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;


@SpringBootTest
@AutoConfigureMockMvc
class IntegrationTests {

    @Autowired
    private StockRepository stockRepository;

    @Autowired
    private MockMvc api;

    @BeforeEach
    void setUp() {
        stockRepository.deleteAll();
    }


    /*@Test
    void podemosModificarLaCantidadDeUnStock() throws Exception {
        Stock stock = new Stock();
        stock.setCantidad(10);
        Stock stockGuardado = stockRepository.save(stock);

        api.perform(put("/api/stocks")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"id\": "+stockGuardado.getId()+",\"cantidad\": 11 }")
                );

        Stock stockModificado = stockRepository.findById(stockGuardado.getId()).get();

        assertThat(stockModificado.getCantidad(), equalTo(11));
    }*/

}


