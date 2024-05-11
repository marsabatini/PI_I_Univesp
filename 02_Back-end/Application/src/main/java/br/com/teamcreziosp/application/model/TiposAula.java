package br.com.teamcreziosp.application.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;


@Entity
@Data
@Table(name = "tipos_aula")
public class TiposAula {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nome;

    private String descricao;

    @OneToMany(mappedBy = "id_tipo")
    private List<Aula> aulas = new ArrayList<>();

}
