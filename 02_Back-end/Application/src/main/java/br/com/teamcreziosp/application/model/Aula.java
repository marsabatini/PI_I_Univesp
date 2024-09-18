package br.com.teamcreziosp.application.model;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "aulas")
public class Aula {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "id_funcionario")
    @JsonIdentityReference(alwaysAsId = true)
    private Funcionario funcionario;

    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private LocalDateTime data;

    @ManyToOne
    @JoinColumn(name = "id_tipo")
    @JsonIdentityReference(alwaysAsId = true)
    private TiposAula tipo;

    private Integer qtddLimiteAlunos;

    @ManyToMany
    @JsonIgnore
    private List<Aluno> alunosInscritos = new ArrayList<>();

}
