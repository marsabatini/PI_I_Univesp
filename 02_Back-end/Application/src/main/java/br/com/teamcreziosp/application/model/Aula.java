package br.com.teamcreziosp.application.model;

import br.com.teamcreziosp.application.enums.Modalidade;
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
public class Aula implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
  
    @NotBlank(message = "Campo obrigatório.")
    private LocalDateTime dataHora;

    @Enumerated(EnumType.ORDINAL)
    @NotBlank(message = "Campo obrigatório.")
    private Modalidade modalidade;

    @ManyToOne
    @JoinColumn(name = "professor_id")
    @JsonIdentityReference(alwaysAsId = true)
    @NotBlank(message = "Campo obrigatório.")
    private Professor professor;

    @NotBlank(message = "Campo obrigatório.")
    private Integer qtddLimiteAlunos;

    @ManyToMany
    @JsonIgnore
    private List<Aluno> alunosInscritos = new ArrayList<>();

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
