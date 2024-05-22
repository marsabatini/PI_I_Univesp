package br.com.teamcreziosp.application.model;

import com.fasterxml.jackson.annotation.JsonFormat;
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
    private Professor professor;

    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private LocalDateTime data;

    @ManyToOne
    @JoinColumn(name = "id_tipo")
    private TiposAula id_tipo;

    private Integer qtddLimiteAlunos;

    @ManyToMany
    private List<Aluno> alunosInscritos = new ArrayList<>();

}
