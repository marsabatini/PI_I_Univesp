package br.com.teamcreziosp.application.enums;

import lombok.Getter;

@Getter
public enum Modalidade {
    //Nao mudar a ordem
    JIU_JITSU(0, "Jiu-jítsu"),
    BOXE(1, "Boxe"),
    SELF_DEFENSE(2, "Self Defense"),
    PFL(3, "PFL"),
    KIDS(4, "Kids"),
    TEEN(5, "Teen");

    private Integer id;
    private String nome;

    Modalidade(Integer id, String nome) {
        this.id = id;
        this.nome = nome;
    }

}
