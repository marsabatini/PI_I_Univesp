package br.com.teamcreziosp.application.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@DiscriminatorValue("Professor")
public class Professor extends Funcionario {

    @OneToMany(mappedBy = "id_professor")
    private List<Aula> aulas = new ArrayList<>();

}
