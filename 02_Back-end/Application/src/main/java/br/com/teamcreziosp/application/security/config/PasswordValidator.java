package br.com.teamcreziosp.application.security.config;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;


/*
*   EXPLICAÇÃO
*
*   Esta classe implementa as regras de validação para a interface ValidPassword.
*   Assim, o @ValidPassword pode garantir que o atributo seguirá determinadas
*   regras impostos pelos desenvolvedores.
*
* */
public class PasswordValidator implements ConstraintValidator<ValidPassword, String> {

    @Override
    public void initialize(ValidPassword constraintAnnotation) {

    }

    // REGRAS: a senha não pode ser um campo nulo nem ser menor do que 8 dígitos
    @Override
    public boolean isValid(String senha, ConstraintValidatorContext context) {

          return senha != null && senha.length() >= 8;
    }
}
