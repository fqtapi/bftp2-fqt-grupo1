package com.example.bftp2springprofilesexample;

import com.example.bftp2springprofilesexample.models.Stock;
import com.example.bftp2springprofilesexample.repositories.StockRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc(
        // in order to not apply the OncePerRequestFilter,
        // i.e. no security
        addFilters = false
)
class ApplicationTests {

    @Autowired
    private StockRepository stockRepository;

    @Autowired
    private MockMvc api;


    @BeforeEach
    void setUp() {
        stockRepository.deleteAll();
    }

    /*@Test
    @WithMockUser
    void allowsToDeleteAnExistingStock() throws Exception {

        Stock stock = stockRepository.save(new Stock(1L, "Prendas01", "Abrigos", "Prendas", 1, 0, 0));

        api.perform(delete("/api/stocks/delete/" + stock.getId()))
                .andExpect(status().isOk());

        List<Stock> stocks = stockRepository.findAll();
        assertThat(stocks, hasSize(0));
    }

    @Test
    void allowsToModifyTheQuantityOfAnyStock() throws Exception {
        Stock stock = new Stock();
        stock.setCantidad(10);
        Stock stockGuardado = stockRepository.save(stock);

        api.perform(put("/api/stocks")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"id\": " + stockGuardado.getId() + ",\"cantidad\": 11 }")
        );

        Stock stockModificado = stockRepository.findById(stockGuardado.getId()).get();

        assertThat(stockModificado.getCantidad(), equalTo(11));
    }

    @Test
    @WithMockUser
    void allowsToModifyAnyStock() throws Exception {
        Stock stock = new Stock();
        stock.setDescripcion("Abrigos");
        Stock stockGuardado = stockRepository.save(stock);

        api.perform(put("/api/stocks")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"id\": " + stockGuardado.getId() + ",\"descripcion\": \"Abrigos")
        );

        Stock stockModificado = stockRepository.findById(stockGuardado.getId()).get();

        assertThat(stockModificado.getDescripcion(), equalTo("Abrigos"));
    }

    @Test
    @WithMockUser
    void allowsToCreateANewStock() throws Exception {

        api.perform(post("/api/stocks/")
                        .with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"codigo\": \"Prendas01\", " +
                                "\"descripcion\": \"Abrigos\"," +
                                "\"category\": \"Prendas\"," +
                                "\"cantidad\": 1 }" +
                                "\"add\": 0 }" +
                                "\"subtract\": 0 }"))
                .andExpect(status().isOk());

        List<Stock> stocks = stockRepository.findAll();
        assertThat(stocks, hasSize(1));
        assertThat(stocks, contains(allOf(
                hasProperty("codigo", is("Prendas01")),
                hasProperty("descripcion", is("Abrigos")),
                hasProperty("category", is("Prendas")),
                hasProperty("cantidad", is(1)),
                hasProperty("add", is(0)),
                hasProperty("subtract", is(0))

        )));
    }

    @Test
    @WithMockUser
    void returnsTheExistingStocks() throws Exception {

        addSampleStocks();

        api.perform(get("/api/stocks"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[*]", hasSize(2)))
                .andExpect(jsonPath("$[0].codigo", equalTo("Prendas01")))
                .andExpect(jsonPath("$[0].descripcion", equalTo("Abrigos")))
                .andExpect(jsonPath("$[0].category", equalTo("Prendas")))
                .andExpect(jsonPath("$[0].cantidad", equalTo(1)))
                .andExpect(jsonPath("$[0].add", equalTo(0)))
                .andExpect(jsonPath("$[0].subtract", equalTo(0)))
                .andExpect(jsonPath("$[1].codigo", equalTo("Complementos01")))
                .andExpect(jsonPath("$[1].descripcion", equalTo("Zapatos")))
                .andExpect(jsonPath("$[1].category", equalTo("Complementos")))
                .andExpect(jsonPath("$[1].cantidad", equalTo(1)))
                .andExpect(jsonPath("$[1].add", equalTo(0)))
                .andExpect(jsonPath("$[1].subtract", equalTo(0)))
                .andDo(print());
    }

    private void addSampleStocks() {
    }*/


}


