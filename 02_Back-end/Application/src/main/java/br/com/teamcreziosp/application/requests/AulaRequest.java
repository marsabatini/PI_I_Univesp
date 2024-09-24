package br.com.teamcreziosp.application.requests;

import br.com.teamcreziosp.application.model.Funcionario;
import br.com.teamcreziosp.application.model.TiposAula;

import java.time.LocalDateTime;

public record AulaRequest(
        Funcionario funcionario,
        LocalDateTime data,
        TiposAula tipo,
        Integer qtddLimiteAlunos
) {
}
