package br.com.teamcreziosp.application.security.auth;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationRequest {

    @NotBlank(message = "Este campo é obrigatório.")
    private String email;

    @NotBlank(message = "Este campo é obrigatório.")
    String senha;
}
