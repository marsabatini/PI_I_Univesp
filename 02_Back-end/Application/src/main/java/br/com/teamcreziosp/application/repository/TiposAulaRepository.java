package br.com.teamcreziosp.application.repository;

import br.com.teamcreziosp.application.model.TiposAula;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TiposAulaRepository extends JpaRepository<TiposAula, Integer> {
}
