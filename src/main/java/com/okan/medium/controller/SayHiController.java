package com.okan.medium.controller;

import java.net.InetAddress;
import java.net.InetSocketAddress;
import java.net.UnknownHostException;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class SayHiController {
    @GetMapping("/hi")
    public String sayHi() throws UnknownHostException {
        InetAddress iAddress = InetAddress.getLocalHost();
        
        return "Selam " + iAddress.getHostName() + ":) ";
    }
}
