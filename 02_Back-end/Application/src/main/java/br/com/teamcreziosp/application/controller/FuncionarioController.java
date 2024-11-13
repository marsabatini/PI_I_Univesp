package br.com.teamcreziosp.application.controller;

import br.com.teamcreziosp.application.model.Aluno;
import br.com.teamcreziosp.application.model.Funcionario;
import br.com.teamcreziosp.application.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/funcionarios")
public class FuncionarioController {

    @Autowired
    private FuncionarioRepository funcionarioRepository;

    @GetMapping
    public ResponseEntity<String> olaMundo(){
        return ResponseEntity.ok("Olá querido professor/treinador");
    }

    @DeleteMapping
    public void delete(@RequestBody Funcionario funcionario) {funcionarioRepository.delete(funcionario);}

    @GetMapping("/{id}")
    public Optional<Funcionario> findById(@PathVariable(value = "id") Integer id) {return funcionarioRepository.findById(id);}


}
