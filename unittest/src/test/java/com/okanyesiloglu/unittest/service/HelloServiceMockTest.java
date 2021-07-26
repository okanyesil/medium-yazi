package com.okanyesiloglu.unittest.service;

import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.mockito.Mockito.when;

import com.okanyesiloglu.unittest.repository.HelloRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class HelloServiceMockTest {

  @Mock
  private HelloRepository helloRepository;

  @InjectMocks
  private final HelloService helloService = new HelloServiceImpl();

  @BeforeEach
  void setMockOutput() {
    when(helloRepository.get()).thenReturn("Hello Mockito From Responsitory");
  }

  @DisplayName("Test Mock helloService + helloRepository")
  @Test
  void testGet() {
    assertEquals("Hello Mockito From Responsitory", helloService.get());
  }

}
