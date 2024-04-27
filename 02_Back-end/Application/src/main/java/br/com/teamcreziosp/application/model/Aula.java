package br.com.teamcreziosp.application.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "aluno")
@Getter
@Setter
public class Aula {

    @Id
    @GeneratedValue
    private Integer id;
    private Integer professor;
    private LocalDate data;
    private LocalTime hora;
    private String sexoIndicado;
    private Integer plano;
    private String modeloAula;
    private Integer limiteParticipantes;
    private Integer idadeMin;
    private Integer idadeMax;

}
