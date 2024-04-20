package br.com.teamcreziosp.application.security.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    private String nome;
    private String sobrenome;
    private String dataNascimento;
    private String email;
    private String senha;
    private String sexo;
    private String tel;
    private String rg;
    private String cpf;
    private String endereco;
    private String bairro;
    private String cidade;
    private String numero;
}
