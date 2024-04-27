package br.com.teamcreziosp.application.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name = "aluno")
@Getter
@Setter
public class Aluno {

    @Id
    @GeneratedValue
    private Integer id;
    private String nome;
    private LocalDate dataNascimento;
    private String sexo;
    private String email;
    private String rg;
    private String cpf;
    private String telefone;
    private String graduacao;
    private String endereco;
    private String exameMedico;
    private Integer qtddAulasProxGrad;
    private Integer plano;
    private String statusPlano;
    private String usuario;
    private String senha;
    private String tipoUsuario;
}
