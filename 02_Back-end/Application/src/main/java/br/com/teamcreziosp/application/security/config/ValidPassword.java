package br.com.teamcreziosp.application.security.config;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import java.lang.annotation.*;

/*
 *   EXPLICAÇÃO
 *
 *   Esta interfaze é exclusiva para se criar uma Validation específica para a senha
 *   a partir da classe PasswordValidator.
 *   Assim, o @ValidPassword pode garantir que o atributo seguirá determinadas
 *   regras impostos pelos desenvolvedores.
 *
 * */

@Target({ElementType.FIELD, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = PasswordValidator.class)
@Documented
public @interface ValidPassword {

    String message() default "Utilize uma senha forte.";

    Class<?>[] groups() default{};

    Class<? extends Payload>[] payload() default {};
}
