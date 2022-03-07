package com.example.bftp2springprofilesexample;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.List;

@Component
public class SampleDataLoader {

    @Autowired
    public SampleDataLoader(CoderRepository coderRepository) {
        this.coderRepository = coderRepository;
    }

    private CoderRepository coderRepository;

    @PostConstruct
    public void loadSampleData() {
        coderRepository.saveAll(List.of(
                new Coder("Helen", "helen@factoriaf5.org"),
                new Coder("Desi", "desi@factoriaf5.org")
        ));
    }
}
