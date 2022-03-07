package com.example.bftp2springprofilesexample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CoderController {
    private CoderRepository coderRepository;

    @Autowired
    public CoderController(CoderRepository coderRepository) {
        this.coderRepository = coderRepository;
    }

    @GetMapping("/coders")
    public List<Coder> allCoders() {
        return coderRepository.findAll();
    }
}
