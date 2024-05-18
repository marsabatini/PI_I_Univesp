package br.com.teamcreziosp.application.service;

import br.com.teamcreziosp.application.model.Aluno;
import br.com.teamcreziosp.application.model.Chat;
import br.com.teamcreziosp.application.model.Funcionario;
import br.com.teamcreziosp.application.repository.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ChatServiceImplementation  implements ChatService{

//    @Autowired
//    private ChatRepository chatRepository;
//
//    @Override
//    public Chat createChat(Aluno reqAluno, Funcionario reqFuncionario) {
//
//        Chat isExist = chatRepository.findChatByAlunosIdAndFuncionariosId(reqAluno, reqFuncionario);
//
//        if (isExist != null) {
//            return isExist;
//        }
//
//        Chat chat = new Chat();
//        chat.getAlunos().add(reqAluno);
//        chat.getFuncionarios().add(reqFuncionario);
//        chat.setTimestamp(LocalDateTime.now());
//
//            return chatRepository.save(chat);
//    }
//
//    @Override
//    public Chat findChatById(Integer chatId) throws Exception{
//
//        Optional<Chat> opt = chatRepository.findById(chatId);
//
//        if(opt.isEmpty()){
//            throw new Exception("Conversa não encontrada.");
//        }
//
//        return opt.get();
//    }
//
//    @Override
//    public List<Chat> findByAlunoChat(Integer alunoId) {
//        return chatRepository.findByAlunosId(alunoId);
//    }
//
//    @Override
//    public List<Chat> findByFuncionarioChat(Integer funcionarioId) {
//        return chatRepository.findByFuncionariosId(funcionarioId);
//    }
}
