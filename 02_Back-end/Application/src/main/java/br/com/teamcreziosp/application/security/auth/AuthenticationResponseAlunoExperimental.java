package br.com.teamcreziosp.application.security.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponseAlunoExperimental {

    private String nomeCompleto;

    private String modalidade;

    private String diaAula;

    private String horaAula;

    private boolean presenca;

    private int avaliacao;

    private String comentario;
}
