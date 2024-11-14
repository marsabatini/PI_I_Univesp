package br.com.teamcreziosp.application.responses;

import br.com.teamcreziosp.application.model.Aula;

import java.time.format.DateTimeFormatter;

public record AulaResponse(
        Integer id,
        String funcionario,
        String dataHora,
        Integer qtddLimiteAlunos,
        String modalidade
) {
    static DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");

    public AulaResponse(Aula aula) {
        this(
                aula.getId(),
                aula.getFuncionario().getNome() + " " + aula.getFuncionario().getSobrenome(),
                aula.getDataHora().format(formatter),
                aula.getQtddLimiteAlunos(),
                aula.getModalidade().getNome()
        );
    }
}