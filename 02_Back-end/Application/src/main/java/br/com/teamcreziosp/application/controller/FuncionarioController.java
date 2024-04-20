package br.com.teamcreziosp.application.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/funcionarios")
public class FuncionarioController {


    @GetMapping
    public ResponseEntity<String> olaMundo(){
        return ResponseEntity.ok("Olá querido professor/treinador");
    }

}
