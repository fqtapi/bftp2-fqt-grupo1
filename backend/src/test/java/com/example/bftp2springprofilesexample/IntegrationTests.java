package com.example.bftp2springprofilesexample;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@SpringBootTest
@AutoConfigureMockMvc
class IntegrationTests {

    @Autowired
    private CoderRepository coderRepository;

    @Autowired
    private MockMvc api;

    @BeforeEach
    void setUp() {
        coderRepository.deleteAll();
    }

    @Test
    void returnsExistingCoders() throws Exception {

        coderRepository.saveAll(
                List.of(new Coder("Amanda", "amanda@factoriaf5.org"),
                        new Coder("Laura", "laura@factoriaf5.org"))
        );

        api.perform(get("/coders"))
                .andExpect(jsonPath("$[*]", hasSize(2)))
                .andExpect(jsonPath("$[0].name", equalTo("Amanda")))
                .andExpect(jsonPath("$[0].email", equalTo("amanda@factoriaf5.org")))
                .andExpect(jsonPath("$[1].name", equalTo("Laura")))
                .andExpect(jsonPath("$[1].email", equalTo("laura@factoriaf5.org"))) ;


    }

}
