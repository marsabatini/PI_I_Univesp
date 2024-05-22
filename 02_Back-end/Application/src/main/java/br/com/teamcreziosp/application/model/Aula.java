package br.com.teamcreziosp.application.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "aulas")
public class Aula {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "id_professor")
    private Professor id_professor;

    private LocalDateTime data;

//    @ManyToOne
//    @JoinColumn(name = "id_tipo")
//    private TiposAula id_tipo;
//
//    private Integer qtddLimiteAlunos;
//
//    @ManyToMany
//    private List<Aluno> alunosInscritos = new ArrayList<>();

}
