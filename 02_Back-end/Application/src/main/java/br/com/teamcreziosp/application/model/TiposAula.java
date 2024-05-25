package br.com.teamcreziosp.application.model;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
@Table(name = "tipos_aula")
public class TiposAula {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String modalidade;

    private String descricao;

}
