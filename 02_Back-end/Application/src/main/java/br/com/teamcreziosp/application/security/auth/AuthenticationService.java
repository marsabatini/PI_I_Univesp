package br.com.teamcreziosp.application.security.auth;

import br.com.teamcreziosp.application.model.Funcionario;
import br.com.teamcreziosp.application.repository.FuncionarioRepository;
import br.com.teamcreziosp.application.security.Role;
import br.com.teamcreziosp.application.security.config.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

//    private final AlunoRepository;
    private final FuncionarioRepository funcionarioRepository;

    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;


    public AuthenticationResponse cadastro(RegisterRequest request){

        // =====> IMPLEMENTAR
//        var aluno = Aluno.builder()
//                .nome(request.getNomeAluno);

        var funcionario = Funcionario.builder()
                .nome(request.getNome())
                .sobrenome(request.getSobrenome())
                .dataNascimento(request.getDataNascimento())
                .email(request.getEmail())
                .senha(passwordEncoder.encode(request.getSenha()))
                .tel(request.getTel())
                .rg(request.getRg())
                .cpf(request.getCpf())
                .role(Role.USER)
                .build();

        funcionarioRepository.save(funcionario);

        var jwtToken = jwtService.generateToken(funcionario);

        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                request.getEmail(),
                request.getPassword())
        );

        // =====> IMPLEMENTAR
        // var aluno =

        var funcionario = funcionarioRepository.findByEmail(request.getEmail())
                .orElseThrow();

        Integer id = funcionario.getId();
        String nome = funcionario.getNome();

        var jwtToken = jwtService.generateToken(funcionario);

        return AuthenticationResponse.builder()
                .token(jwtToken)
                .id(id)
                .nome(nome)
                .build();
    }

}
