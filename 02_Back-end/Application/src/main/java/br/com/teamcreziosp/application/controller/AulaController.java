package br.com.teamcreziosp.application.controller;

import br.com.teamcreziosp.application.model.Aluno;
import br.com.teamcreziosp.application.model.Aula;
import br.com.teamcreziosp.application.model.Professor;
import br.com.teamcreziosp.application.repository.AlunoRepository;
import br.com.teamcreziosp.application.repository.AulaRepository;
import br.com.teamcreziosp.application.repository.ProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/adm")
public class AulaController {

    @Autowired
    private AulaRepository aulaRepository;

    @Autowired
    private ProfessorRepository professorRepository;

    @Autowired
    private AlunoRepository alunoRepository;

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
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Professor não encontrado");
        }
    }

    @GetMapping("/aulas/{id}")
    public Optional<Aula> findById(@PathVariable(value = "id") Integer id) {
        return aulaRepository.findById(id);
    }

    @DeleteMapping("/aulas")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void delete(@RequestBody Aula aula) {
        aulaRepository.delete(aula);
    }

    @PutMapping("/aulas")
    public Aula update(@RequestBody Aula aula) {
        return aulaRepository.save(aula);
    }

    //adicionar restricao de quantidade de alunos
    @PostMapping("/aulas/adicionaraluno/{idAluno}/{idAula}")
    public ResponseEntity<String> adicionarAluno(@PathVariable(value = "idAula") Integer idAula, @PathVariable(value = "idAluno") Integer idAluno) {

        Optional<Aula> buscarAula = aulaRepository.findById(idAula);
        if (buscarAula.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Aula não encontrada.");
        }

        Optional<Aluno> buscarAluno = alunoRepository.findById(idAluno);
        if (buscarAluno.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Aluno não encontrado.");
        }

        Aula aula = buscarAula.get();
        Aluno aluno = buscarAluno.get();

        if (!aula.getAlunosInscritos().contains(aluno)) {
            //aula.getAlunosInscritos().add(aluno);
            //aulaRepository.save(aula);

            aluno.getAulasInscritas().add(aula);
            alunoRepository.save(aluno);

            return ResponseEntity.ok("Aluno inscrito com sucesso.");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Aluno já está inscrito nesta aula.");
        }
    }
    
    @DeleteMapping("/aulas/removeraluno/{idAluno}/{idAula}")
    public ResponseEntity<String> removerAluno(@PathVariable(value = "idAula") Integer idAula, @PathVariable(value = "idAluno") Integer idAluno) {
        Optional<Aula> buscarAula = aulaRepository.findById(idAula);
        if (buscarAula.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Aula não encontrada.");
        }

        Optional<Aluno> buscarAluno = alunoRepository.findById(idAluno);
        if (buscarAluno.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Aluno não encontrado.");
        }

        Aula aula = buscarAula.get();
        Aluno aluno = buscarAluno.get();

        if (aula.getAlunosInscritos().contains(aluno)) {
            aula.getAlunosInscritos().remove(aluno);
            aulaRepository.save(aula);
            return ResponseEntity.ok("Aluno removido com sucesso.");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Aluno não está inscrito nesta aula.");
        }
    }

    //buscar alunos inscritos na aula
    @GetMapping("/aulas/alunosinscritosnaaula/{idAula}")
    public ResponseEntity<List<String>> alunosInscritosNaAula(@PathVariable(value = "idAula") Integer idAula) {
        Optional<Aula> buscarAula = aulaRepository.findById(idAula);
        if (buscarAula.isEmpty()) {
            ArrayList<String> mensagemRetorno = new ArrayList<>();
            mensagemRetorno.add("Aula não encontrada");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(mensagemRetorno);
        }

        Aula aula = buscarAula.get();

        List<Aluno> alunosInscritos = aula.getAlunosInscritos();

        List<String> nomesAlunosInscritos =
                alunosInscritos
                        .stream()
                        .map(aluno -> (aluno.getNome() + " " + aluno.getSobrenome()))
                        .toList();

        return ResponseEntity.status(HttpStatus.OK).body(nomesAlunosInscritos);
    }

    //buscar quais aulas o aluno está inscrito: retorna uma lista com ID das aulas
    @GetMapping("/aulas/aulasdoaluno/{idAluno}")
    public ResponseEntity<List<String>> aulasDoAluno(@PathVariable(value = "idAluno") Integer idAluno) {
        Optional<Aluno> buscarAluno = alunoRepository.findById(idAluno);
        if (buscarAluno.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        Aluno aluno = buscarAluno.get();
        List<Aula> aulasInscritas = aluno.getAulasInscritas();

        List<String> aulasComDataHora = aulasInscritas
                .stream()
                .map(aula -> aula.getModalidade() + " " + aula.getDataHora().format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm")))
                .toList();

        return ResponseEntity.status(HttpStatus.OK).body(aulasComDataHora);
    }

}
