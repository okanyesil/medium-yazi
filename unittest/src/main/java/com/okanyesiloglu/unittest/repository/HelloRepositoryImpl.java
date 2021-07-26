package com.okanyesiloglu.unittest.repository;

import org.springframework.stereotype.Repository;

@Repository
public class HelloRepositoryImpl implements HelloRepository{

  @Override
  public String get() {
    return "Hello Mockito From Responsitory";
  }
}
