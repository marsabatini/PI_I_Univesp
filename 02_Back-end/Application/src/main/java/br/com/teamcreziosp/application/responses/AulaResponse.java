package br.com.teamcreziosp.application.responses;

import br.com.teamcreziosp.application.model.Aula;
import br.com.teamcreziosp.application.model.Funcionario;
import br.com.teamcreziosp.application.model.TiposAula;

import java.time.LocalDateTime;

public record AulaResponse(
        Funcionario funcionario,
        LocalDateTime data,
        TiposAula tipo,
        Integer qtddLimiteAlunos
) {
    public AulaResponse(Aula aula) {
        this(aula.getProfessor(), aula.getDataHora(), aula.getTipo(), aula.getQtddLimiteAlunos());
    }
}