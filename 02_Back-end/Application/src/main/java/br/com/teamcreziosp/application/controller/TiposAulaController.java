package br.com.teamcreziosp.application.controller;

import br.com.teamcreziosp.application.model.TiposAula;
import br.com.teamcreziosp.application.repository.TiposAulaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping(value = "/adm")
public class TiposAulaController {

    @Autowired
    private TiposAulaRepository repository;

    @GetMapping("/tiposaulas")
    public List<TiposAula> findAll() {
        return repository.findAll();
    }

    @PostMapping("/tiposaulas")
    public void save(@RequestBody TiposAula tipoAula) {
        repository.save(tipoAula);
    }

    @GetMapping("/tiposaulas/{id}")
    public Optional<TiposAula> findById(@PathVariable(value = "id") Integer id) {
        return repository.findById(id);
    }

    @DeleteMapping("/tiposaulas")
    public void delete(@RequestBody TiposAula tiposAula) {
        repository.delete(tiposAula);
    }

    @PutMapping("/tiposaulas")
    public TiposAula update(@RequestBody TiposAula tipoAula) {
        return repository.save(tipoAula);
    }

}
