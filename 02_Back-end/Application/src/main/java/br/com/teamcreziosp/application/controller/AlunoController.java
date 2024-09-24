package br.com.teamcreziosp.application.controller;

import br.com.teamcreziosp.application.model.Aluno;
import br.com.teamcreziosp.application.model.Aula;
import br.com.teamcreziosp.application.model.TiposAula;
import br.com.teamcreziosp.application.repository.AlunoRepository;
import br.com.teamcreziosp.application.repository.AulaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/adm")
public class AlunoController {

    @Autowired
    private AulaRepository aulaRepository;

    @Autowired
    private AlunoRepository alunoRepository;

    @GetMapping("/aulas")
    public List<Aula> findAll() {
        return aulaRepository.findAll();
    }

    @PostMapping("/aulas")
    public void save(@RequestBody Aula aula) {
        aulaRepository.save(aula);
    }

    @GetMapping("/aulas/{id}")
    public Optional<Aula> findById(@PathVariable(value = "id") Integer id) {
        return aulaRepository.findById(id);
    }

    @DeleteMapping("/aulas")
    public void delete(@RequestBody Aula aula) {
        aulaRepository.delete(aula);
    }

    @PutMapping("/aulas")
    public Aula update(@RequestBody Aula aula) {
        return aulaRepository.save(aula);
    }

}
