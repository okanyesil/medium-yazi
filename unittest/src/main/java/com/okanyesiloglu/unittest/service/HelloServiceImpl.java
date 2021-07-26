package com.okanyesiloglu.unittest.service;

import com.okanyesiloglu.unittest.repository.HelloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HelloServiceImpl implements HelloService{
  @Autowired
  HelloRepository helloRepository;

  @Override
  public String get() {
    return helloRepository.get();
  }
}
