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

    private String nomeCompleto;

    private String email;

    private String telefone;

}
