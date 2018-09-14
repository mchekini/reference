package com.example.demo.carrepackage;

import javax.annotation.PostConstruct;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

/**
 * @Author mahdchek.
 */

@RestController
@ComponentScan
@Slf4j
public class BasicController {


    @PostConstruct
    public void init(){
        log.info("init du controller");
    }

    @GetMapping("/test-app")
    public String testApp() {
        return "test app OK";
    }

    @GetMapping("/isma")
    public Response testresource() {

        return Response.status(Status.OK).entity("test ok").build();
    }
}
