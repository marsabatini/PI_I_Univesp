package br.com.teamcreziosp.application.repository;

import br.com.teamcreziosp.application.model.Aluno;
import br.com.teamcreziosp.application.model.AlunoExperimental;
import br.com.teamcreziosp.application.security.auth.AuthenticationResponseAlunoExperimental;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AlunoExperimentalRepository extends JpaRepository<AlunoExperimental, Integer> {

    Iterable<AlunoExperimental> findByEmail(String email);

}
