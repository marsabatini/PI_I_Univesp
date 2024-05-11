package br.com.teamcreziosp.application.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@Table(name = "aulas")
public class Aula {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer id_professor;

    private LocalDateTime data;

    @ManyToOne
    @JoinColumn(name = "id_tipo")
    private TiposAula id_tipo;

    private Integer qtddLimiteAlunos;

    @ManyToMany
    @JoinTable(
            name = "aula_aluno",
            joinColumns = @JoinColumn(name = "id_aula"),
            inverseJoinColumns = @JoinColumn(name = "id_aluno"))
    private List<Aluno> alunosInscritos;

}
