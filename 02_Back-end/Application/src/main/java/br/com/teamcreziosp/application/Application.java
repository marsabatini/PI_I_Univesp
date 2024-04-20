package br.com.teamcreziosp.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@EnableWebMvc
public class Application implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/**")
                .allowedMethods("GET", "POST", "DELETE", "OPTIONS",
                        "HEAD", "TRACE", "CONNECT");

    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}
