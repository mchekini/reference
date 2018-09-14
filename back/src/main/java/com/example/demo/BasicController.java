package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author mahdchek.
 */


@RestController
public class BasicController {

    @GetMapping("/test-app")
    public String testApp(){
        return "test app OK";
    }
}
