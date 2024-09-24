package br.com.teamcreziosp.application.model;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "aulas")
public class Aula implements UserDetails {

    @Id
    @GeneratedValue
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "id_funcionario")
    @JsonIdentityReference(alwaysAsId = true)
    private Funcionario funcionario;
  
    @NotBlank(message = "Campo obrigatório.")
    private String data;

    @NotBlank(message = "Campo obrigatório.")
    private String horario;

    @ManyToOne
    @JoinColumn(name = "id_tipo")
    @JsonIdentityReference(alwaysAsId = true)
    private TiposAula tipo;

    @NotBlank(message = "Campo obrigatório.")
    private String modalidade;

    @NotBlank(message = "Campo obrigatório.")
    private String Professor;

    @ManyToMany
    @JsonIgnore
    private List<Aluno> alunosInscritos = new ArrayList<>();

    @NotBlank(message = "Campo obrigatório.")
    private int qtdAludos;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of();
    }

    @Override
    public String getPassword() {
        return "";
    }

    @Override
    public String getUsername() {
        return "";
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }
}
