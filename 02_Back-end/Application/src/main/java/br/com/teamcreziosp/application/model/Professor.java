package br.com.teamcreziosp.application.model;

import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;

//@EqualsAndHashCode(callSuper = true)
@Data
@Entity
public class Professor extends Funcionario {




    //@OneToMany(mappedBy = "id_professor")
    //private List<Aula> aulas = new ArrayList<>();

}
