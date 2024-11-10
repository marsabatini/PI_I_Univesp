package br.com.teamcreziosp.application.security.auth;

import br.com.teamcreziosp.application.security.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {

    private String token;

    Integer id;

    String nomeSobrenome;

    String telefone;

    String email;

    String dataNascimento;

    String graduacao;

    String aulas_prox_graduacao;

    String sexo;

    String plano;

    String statusPlano;

    String exameMedico;

    String cargo;

    Role role;

}
