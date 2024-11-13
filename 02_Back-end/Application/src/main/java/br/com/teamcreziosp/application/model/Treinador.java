package br.com.teamcreziosp.application.model;

import br.com.teamcreziosp.application.security.Role;
import jakarta.persistence.DiscriminatorValue;

@DiscriminatorValue("treinador")
public class Treinador extends Funcionario {

}
