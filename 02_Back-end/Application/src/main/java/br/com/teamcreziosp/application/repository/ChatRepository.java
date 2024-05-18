package br.com.teamcreziosp.application.repository;

import br.com.teamcreziosp.application.model.Aluno;
import br.com.teamcreziosp.application.model.Chat;
import br.com.teamcreziosp.application.model.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ChatRepository {

//    extends JpaRepository<Chat, Integer>
//    public List<Chat> findByAlunosId(Integer alunosId);
//
//    public List<Chat> findByFuncionariosId(Integer funcionarioId);
//
//    @Query("SELECT c FROM Chat c WHERE :aluno MEMBER of c.alunos AND :reqUser MEMBER of c.funcionarios")
//    public Chat findChatByAlunosIdAndFuncionariosId(@Param("aluno") Aluno alunosId, @Param("reqUser") Funcionario funcionarioId);
}
