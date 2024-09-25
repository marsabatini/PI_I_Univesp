package br.com.teamcreziosp.application.model;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.*;
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
  
    @NotBlank(message = "Campo obrigatório.")
    private LocalDateTime dataHora;

    @ManyToOne
    @JoinColumn(name = "id_tipo")
    @JsonIdentityReference(alwaysAsId = true)
    private TiposAula tipo;

    @NotBlank(message = "Campo obrigatório.")
    private String modalidade;

    @NotBlank(message = "Campo obrigatório.")
    @ManyToOne
    @JoinColumn(name = "id_professor")
    @JsonIdentityReference(alwaysAsId = true)
    private Professor professor;

    @ManyToMany
    @JsonIgnore
    private List<Aluno> alunosInscritos = new ArrayList<>();

    @NotBlank(message = "Campo obrigatório.")
    private Integer qtddLimiteAlunos;

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
