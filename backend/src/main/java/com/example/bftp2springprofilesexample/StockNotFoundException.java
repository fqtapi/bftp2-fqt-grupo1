package com.example.bftp2springprofilesexample;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "Stock not found")

public class StockNotFoundException extends RuntimeException{


}