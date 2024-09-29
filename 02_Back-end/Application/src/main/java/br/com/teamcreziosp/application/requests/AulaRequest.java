package br.com.teamcreziosp.application.requests;

import br.com.teamcreziosp.application.model.Funcionario;

import java.time.LocalDateTime;

public record AulaRequest(
        Funcionario funcionario,
        LocalDateTime data,
        Integer qtddLimiteAlunos
) {
}
