package br.com.teamcreziosp.application.repository;

import br.com.teamcreziosp.application.model.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FuncionarioRepositoryTest extends JpaRepository<Funcionario, Integer> {
    // Nenhum método adicional é necessário aqui, pois o JpaRepository já possui o findById
}
