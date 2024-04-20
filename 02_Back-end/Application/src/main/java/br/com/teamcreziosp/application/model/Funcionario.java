package br.com.teamcreziosp.application.model;


import br.com.teamcreziosp.application.security.Role;
import jakarta.persistence.*;
import jakarta.persistence.GeneratedValue;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
//@Table(name = '//')
public class Funcionario implements UserDetails {

    @Id
    @GeneratedValue
    private Integer id;

    private String nome;

    private String sobrenome;

    @Column(name = "data_nasc")
    private String dataNascimento;

    private String email;

    private String senha;

    private String sexo;

    private String tel;

    private String rg;

    private String cpf;

//###################################################################################################################
//    ====> Criar CLASSE ENDERECO: falta Estado, CEP e Complemento
//    ==> Isso porque esses atributos serão usados para alunos e funcionários: o código ficaria melhor lido
//    ==> Mas isso precisaria de uma TABELA ENDERECO
//
//    private String endereco;
//
//    private String complemento;
//
//    private String numero;
//
//    private String bairro;
//
//    private String cidade;
//###################################################################################################################

    @Enumerated(EnumType.STRING)
    private Role role;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getPassword() {
        return senha;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked(){
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired(){
        return true;
    }

    @Override
    public boolean isEnabled(){
        return true;
    }
}
