package br.com.teamcreziosp.application.repository;

import br.com.teamcreziosp.application.model.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AlunoRepository extends JpaRepository<Aluno, Integer> {

    Optional<Aluno> findByEmail(String email);
}
