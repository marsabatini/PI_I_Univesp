package br.com.teamcreziosp.application.service;

import br.com.teamcreziosp.application.model.AlunoExperimental;
import br.com.teamcreziosp.application.repository.AlunoExperimentalRepository;
import br.com.teamcreziosp.application.security.auth.AuthenticationResponseAlunoExperimental;
import br.com.teamcreziosp.application.service.exceptions.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.Optional;


@Service
public class AlunoExperimentalService {

    @Autowired
    AlunoExperimentalRepository alunoExperimentalRepository;

    // ===> REFATORAR: note que pelo "repository" do Controller todos os campos são trazidos.
    // A ideia é que apenas alguns campos sejam visualizados pelo aluno experimental conforme
    // o momento em que ele está; por exemplo, se ele se inscreveu, mas não fez a aula, ao con-
    // sultar com seu e-mail, verá apenas seu nome, horário, data e modalidade de aula; se ele
    // já tiver feito a aula, verá o campo avaliaćão e comentário que ele poderá fazer, mas,
    // isso somente se, ele tiver comparecido à aula, o que será setado pelo professor/treinador.
    //
    // PS.: O método abaixo não foi implementado nem usado: seu código é apenas ilustração,
    // já que ele está incorreto.
    public AuthenticationResponseAlunoExperimental consultaAlunoExperimental(AlunoExperimental request) {

        return AuthenticationResponseAlunoExperimental.builder()
                .nomeCompleto(request.getNomeCompleto())
                .modalidade(request.getModalidade())
                .diaAula(request.getDiaAula())
                .horaAula(request.getHoraAula())
                .avaliacao(request.getAvaliacao())
                .comentario(request.getComentario())
                .build();
    }

    // ===> REFATORAR: note que será necessário fazer a atualização dos atributos avaliação
    // e comentário posteriormente. Mas isso somente se o atributo booleano presenca
    // (setado pelo funcionário) for igual a true. Precisa-se decidir se isso será nesse
    // mesmo método ou em outro, necessitando também de outro EndPoint (talvez, fique bom).
    // Além disso, pode-se deixar os atributos desse métodos disponíveis para a atualização
    // somente enquanto o aluno experimental não tiver realizado a aula.
    //
    // PS.: Este método está funcionando, porém precisa ser refatorado a fim de que as atua-
    // lizações de um campo não tornem todos os outros nulos, caso não sejam setados.
    public AlunoExperimental atualizarAlunoExperimental(String email, AlunoExperimental alunoAtualizado) {

        Iterable<AlunoExperimental> alunos = alunoExperimentalRepository.findByEmail(email);

        Optional<AlunoExperimental> alunoExperimentalOptional = alunos.iterator().hasNext() ?
                Optional.of(alunos.iterator().next()) :
                Optional.empty();

        AlunoExperimental alunoExperimental = alunoExperimentalOptional
                .orElseThrow(() -> new UserNotFoundException("E-mail não cadastrado."));

        if(!alunoExperimental.isPresenca()) {
            if (alunoAtualizado.getModalidade() != null && !alunoAtualizado.getModalidade().isBlank()) {
                alunoExperimental.setModalidade(alunoAtualizado.getModalidade());
            }

            if (alunoAtualizado.getDiaAula() != null && !alunoAtualizado.getDiaAula().isBlank()) {
                alunoExperimental.setDiaAula(alunoAtualizado.getDiaAula());
            }

            if (alunoAtualizado.getHoraAula() != null && !alunoAtualizado.getHoraAula().isBlank()) {
                alunoExperimental.setHoraAula(alunoAtualizado.getHoraAula());
            }
        }

        if (alunoExperimental.isPresenca()) {
            alunoExperimental.setAvaliacao(alunoAtualizado.getAvaliacao());
            alunoExperimental.setComentario(alunoAtualizado.getComentario());
        }

        return alunoExperimentalRepository.save(alunoExperimental);
    }

}
