package br.com.teamcreziosp.application.responses;

import br.com.teamcreziosp.application.model.Aula;
import br.com.teamcreziosp.application.model.Funcionario;

import java.time.LocalDateTime;

public record AulaResponse(
        Funcionario funcionario,
        LocalDateTime data,
        Integer qtddLimiteAlunos
) {
    public AulaResponse(Aula aula) {
        this(aula.getFuncionario(), aula.getDataHora(), aula.getQtddLimiteAlunos());
    }
}