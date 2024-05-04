package br.com.teamcreziosp.application.security.config;

import br.com.teamcreziosp.application.repository.AlunoRepository;
import br.com.teamcreziosp.application.repository.FuncionarioRepository;
import br.com.teamcreziosp.application.service.exceptions.UserNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {


    @Autowired
    private final FuncionarioRepository funcionarioRepository;

    @Autowired
    private final AlunoRepository alunoRepository;


    // EXPLICAÇÃO: Note que os dois próximos métodos são responsáveis por
    // implementar o retorno do UserDetailsService, possibilitando a autenticação
    // tanto para os FUNCIONÁRIOS quanto para ALUNOS.
    @Bean
    public UserDetailsService userDetailsService(){


        return username -> funcionarioRepository.findByEmail(username).isPresent() ?
                funcionarioRepository.findByEmail(username).orElseThrow(() -> new UserNotFoundException("Usuário não encontrado.")) :
                alunoRepository.findByEmail(username).orElseThrow(() -> new UserNotFoundException("Usuário não encontrado."));
    }

    @Bean
    public AuthenticationProvider authenticationProvider(){
        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
        authenticationProvider.setUserDetailsService(userDetailsService());
        authenticationProvider.setPasswordEncoder(passwordEncoder());
        return authenticationProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception{

        return configuration.getAuthenticationManager();
    }


    @Bean
    public PasswordEncoder passwordEncoder() {

        return new BCryptPasswordEncoder();
    }


}
