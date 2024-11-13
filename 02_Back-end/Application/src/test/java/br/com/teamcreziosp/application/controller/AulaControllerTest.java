package br.com.teamcreziosp.application.controller;

import br.com.teamcreziosp.application.model.Aula;
import br.com.teamcreziosp.application.model.Funcionario;
import br.com.teamcreziosp.application.repository.AulaRepository;
import br.com.teamcreziosp.application.repository.FuncionarioRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

class AulaControllerTest {

    @Mock
    private FuncionarioRepository funcionarioRepository;

    @Mock
    private AulaRepository aulaRepository;

    @InjectMocks
    private AulaController aulaController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testSaveAulaWithExistingFuncionario() {
        // Configuração dos dados
        Funcionario funcionario = new Funcionario();
        funcionario.setId(1);

        Aula aula = new Aula();
        aula.setFuncionario(funcionario);

        // Simulando o comportamento dos repositórios
        when(funcionarioRepository.findById(funcionario.getId())).thenReturn(Optional.of(funcionario));

        // Executando o método
        aulaController.save(aula);

        // Verificando se o save foi chamado com a entidade aula
        verify(aulaRepository, times(1)).save(aula);
    }

    @Test
    void testSaveAulaWithNonExistingFuncionario() {
        // Configuração dos dados
        Funcionario funcionario = new Funcionario();
        funcionario.setId(1);

        Aula aula = new Aula();
        aula.setFuncionario(funcionario);

        // Simulando o comportamento dos repositórios
        when(funcionarioRepository.findById(funcionario.getId())).thenReturn(Optional.empty());

        // Executando o método e verificando a exceção
        ResponseStatusException exception = assertThrows(ResponseStatusException.class, () -> {
            aulaController.save(aula);
        });

        // Verificando se a exceção é a correta
        assertEquals(HttpStatus.BAD_REQUEST, exception.getStatusCode());
        assertEquals("Professor não encontrado", exception.getReason());

        // Verificando que o save não foi chamado
        verify(aulaRepository, never()).save(any(Aula.class));
    }
}
