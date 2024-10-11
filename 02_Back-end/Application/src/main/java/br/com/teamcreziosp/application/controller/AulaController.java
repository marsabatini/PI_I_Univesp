package br.com.teamcreziosp.application.controller;

import br.com.teamcreziosp.application.model.Aula;
import br.com.teamcreziosp.application.model.Professor;
import br.com.teamcreziosp.application.repository.AulaRepository;
import br.com.teamcreziosp.application.repository.ProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/adm")
public class AulaController {

    @Autowired
    private AulaRepository aulaRepository;

    @Autowired
    private ProfessorRepository professorRepository;

    @GetMapping("/aulas")
    public List<Aula> findAll() {
        return aulaRepository.findAll();
    }

    @PostMapping("/aulas")
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@RequestBody Aula aula) {
        Optional<Professor> professor = professorRepository.findById(aula.getProfessor().getId());

        if (professor.isPresent()) {
            aula.setProfessor(professor.get());
            aulaRepository.save(aula);
        } else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "TiposAula não encontrado");
        }
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
