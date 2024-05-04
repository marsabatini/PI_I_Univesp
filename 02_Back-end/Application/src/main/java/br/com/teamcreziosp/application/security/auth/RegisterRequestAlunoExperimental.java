package br.com.teamcreziosp.application.security.auth;

import br.com.teamcreziosp.application.security.config.ValidPassword;
import jakarta.persistence.Column;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.*;
import org.hibernate.validator.constraints.br.CPF;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class RegisterRequestAlunoExperimental {

    @NotBlank(message = "Campo obrigatório.")
    @Pattern(regexp = "^[A-Z]+(.)*")
    private String nomeCompleto;

    @Email(message = "E-mail inválido.")
    @Column(unique = true)
    @NotBlank(message = "Campo obrigatório.")
    private String email;

    @NotBlank(message = "Campo obrigatório.")
    private String telefone;

}
