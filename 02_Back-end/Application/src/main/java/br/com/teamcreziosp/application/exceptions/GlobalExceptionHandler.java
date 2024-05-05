package br.com.teamcreziosp.application.exceptions;

import br.com.teamcreziosp.application.service.exceptions.DataBindingViolationException;
import br.com.teamcreziosp.application.service.exceptions.UserNotFoundException;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.hibernate.ObjectNotFoundException;
import org.hibernate.exception.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import java.io.IOException;

/*
*   EXPLICAÇÃO
*
*   Esta classe GlobalExceptionHandler é responsável por capturar as exceções
*   e tratá-las em tempo de execução por meio de seus Handlers.
*
* */

@RestControllerAdvice
public class GlobalExceptionHandler implements AuthenticationFailureHandler {

    // Este Value está relacionado com o retorno booleano do printStackTrace configurado no .properties
    // No caso, o stackTrace está ativado para fins didáticos e de desenvolvimento.
    @Value("${server.error.include-exception}")
    private boolean printStackTrace;


    // EXPLICAÇÃO: esse Handler captura exceptions lançadas quando a validação de um argumento anotado
    // como @Valid falha.
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
    protected ResponseEntity<Object> handleMethodArgumentNotValid(
            MethodArgumentNotValidException methodArgumentNotValidException,
            HttpHeaders headers,
            HttpStatus status,
            WebRequest request){

        ErrorResponse errorResponse = new ErrorResponse(HttpStatus.UNPROCESSABLE_ENTITY.value(),
                "Erro de validação. Cheque os campos para mais detalhes."
                );

        for(FieldError fieldError : methodArgumentNotValidException.getBindingResult().getFieldErrors()){
            errorResponse.addValidationError(fieldError.getField(), fieldError.getDefaultMessage());
        }
        return ResponseEntity.unprocessableEntity().body(errorResponse);
    }


    // EXPLICAÇÃO: esse Handler atua em exceptions relacionadas à DML (SQL)
    @ExceptionHandler(ConstraintViolationException.class)
    @ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
    public ResponseEntity<Object> handleConstraintViolationException(
            ConstraintViolationException constraintViolationException,
            WebRequest request){

        return buildErrorResponse(
                constraintViolationException,
                HttpStatus.UNPROCESSABLE_ENTITY,
                request
        );
    }


    // EXPLICAÇÃO: esse Handler captura exceptions relacionadas às tentativas
    // de inserção ou atualização de dados que violem a integridade do BD.
    // Por exemplo, ela impede que dois e-mails sejam cadastrados.
    @ExceptionHandler(DataBindingViolationException.class)
    @ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
    public ResponseEntity<Object> handleUserJaCadastradoException(
            DataBindingViolationException dataBindingViolationException,
            WebRequest request){

        return buildErrorResponse(
                dataBindingViolationException,
                HttpStatus.UNPROCESSABLE_ENTITY,
                request);
    }

    // EXPLICAÇÃO: esse Handler captura exceptions relacionadas às tentativas
    // de inserção ou atualização de dados que violem a integridade do BD.
    // Por exemplo, ela impede que dois e-mails sejam cadastrados.
    @ExceptionHandler(DataIntegrityViolationException.class)
    @ResponseStatus(HttpStatus.CONFLICT)
    public ResponseEntity<Object> handleDataIntegrityViolationException(
            DataIntegrityViolationException dataIntegrityViolationException,
            WebRequest request){

        final String errorMessage = "Este e-mail já está cadastrado.";

        return buildErrorResponse(
                dataIntegrityViolationException,
                errorMessage,
                HttpStatus.CONFLICT,
                request);
    }


    // EXPLICAÇÃO: esse Handler captura exceptions lançadas quando um objeto
    // não é encontrado. O motivo de se manter esse Handler está no fato de
    // que ele pode ser personalizado por meio de sua Classe ObjectNotFoundException
    // conforme as necessidades da aplicação.
    @ExceptionHandler(ObjectNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<Object> handlerObjectNotFoundException(
            ObjectNotFoundException objectNotFoundException,
            WebRequest request){

        return buildErrorResponse(
                objectNotFoundException,
                HttpStatus.NOT_FOUND,
                request);
    }


    // EXPLICAÇÃO: esse Handler captura exceptions lançadas quando um usuário
    // não é encontrado. O motivo de se manter esse Handler está no fato de
    // que ele pode ser personalizado por meio de sua Classe UserNotFoundException
    // conforme as necessidades da aplicação.
    @ExceptionHandler(UserNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<Object> handleUserNotFoundException(
            UserNotFoundException userNotFoundException,
            WebRequest request){

        return buildErrorResponse(
                userNotFoundException,
                HttpStatus.NOT_FOUND,
                request);
    }


    // EXPLICAÇÃO: esse Handler captura a exception lançada no endpoint de Login,
    // caso a senha seja incorreta.
    @ExceptionHandler(BadCredentialsException.class)
    @ResponseStatus(HttpStatus.FORBIDDEN)
    public void onAuthenticationFailure(
            HttpServletRequest request,
            HttpServletResponse response,
            AuthenticationException exception) throws IOException, ServletException {

        Integer status = HttpStatus.FORBIDDEN.value();

        response.setStatus(status);
        response.setContentType("application/json");
        ErrorResponse errorResponse = new ErrorResponse(status, "Senha incorreta.");
        response.getWriter().append(errorResponse.toJson());
    }


    // EXPLICAÇÃO: o método buildErrorResponse constrói o tipo de resposta
    // de cada Handler acima.
    private ResponseEntity<Object> buildErrorResponse(
            Exception exception,
            HttpStatus httpStatus,
            WebRequest request){

        return buildErrorResponse(
                exception,
                exception.getMessage(),
                httpStatus,
                request);
    }

    private ResponseEntity<Object> buildErrorResponse(
            Exception exception,
            String message,
            HttpStatus httpStatus,
            WebRequest request){

        ErrorResponse errorResponse = new ErrorResponse(httpStatus.value(), message);

        if(this.printStackTrace){
            errorResponse.setStackTrace(ExceptionUtils.getStackTrace(exception));
        }

        return ResponseEntity.status(httpStatus).body(errorResponse);
    }

}










