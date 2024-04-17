-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema teamcreziosp
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema teamcreziosp
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `teamcreziosp` DEFAULT CHARACTER SET utf8mb3 ;
USE `teamcreziosp` ;

-- -----------------------------------------------------
-- Table `teamcreziosp`.`planos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teamcreziosp`.`planos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(30) NOT NULL,
  `valor` DECIMAL(10,2) NOT NULL,
  `qtd_aulas` INT NOT NULL,
  `taxa_matricula` DECIMAL(10,2) NULL,
  `parcelas` INT NULL,
  `meses_parcelas` INT NULL,
  `ferias` TINYINT(1) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `teamcreziosp`.`aluno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teamcreziosp`.`aluno` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `sobrenome` VARCHAR(45) NOT NULL,
  `data_nasc` DATE NOT NULL,
  `sexo` VARCHAR(20) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `RG` VARCHAR(12) NOT NULL,
  `CPF` VARCHAR(12) NOT NULL,
  `tel` VARCHAR(20) NULL DEFAULT NULL,
  `CEP` VARCHAR(10) NOT NULL,
  `endereco` VARCHAR(30) NOT NULL,
  `bairro` VARCHAR(30) NOT NULL,
  `cidade` VARCHAR(30) NOT NULL,
  `numero` INT NOT NULL,
  `graduacao` VARCHAR(30) NULL DEFAULT NULL,
  `exame_medico` VARCHAR(255) NULL DEFAULT NULL,
  `aulas_prox_grad` INT NULL DEFAULT NULL,
  `plano` INT NOT NULL,
  `status_plano` VARCHAR(20) NULL DEFAULT NULL,
  `usuario` VARCHAR(30) NOT NULL,
  `senha` VARCHAR(255) NOT NULL,
  `tipo_user` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Aluno_Plano_idx` (`plano` ASC) VISIBLE,
  CONSTRAINT `fk_Aluno_Plano`
    FOREIGN KEY (`plano`)
    REFERENCES `teamcreziosp`.`planos` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `teamcreziosp`.`professor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teamcreziosp`.`professor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `sobrenome` VARCHAR(45) NOT NULL,
  `data_nasc` DATE NOT NULL,
  `sexo` VARCHAR(20) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `tel` VARCHAR(20) NULL DEFAULT NULL,
  `RG` VARCHAR(12) NOT NULL,
  `CPF` VARCHAR(12) NOT NULL,
  `endereco` VARCHAR(30) NOT NULL,
  `bairro` VARCHAR(30) NOT NULL,
  `cidade` VARCHAR(30) NOT NULL,
  `numero` INT NOT NULL,
  `tipo_user` VARCHAR(30) NOT NULL,
  `senha` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `teamcreziosp`.`aula`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teamcreziosp`.`aula` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `professor` INT NOT NULL,
  `data` DATE NOT NULL,
  `hora` TIME NOT NULL,
  `sexo_indicado` VARCHAR(20) NULL DEFAULT NULL,
  `modelo_aula` VARCHAR(20) NOT NULL,
  `limite_participantes` INT NOT NULL,
  `idade_min` INT NOT NULL,
  `idade_max` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Aula_Professor1_idx` (`professor` ASC) VISIBLE,
  CONSTRAINT `fk_Aula_Professor1`
    FOREIGN KEY (`professor`)
    REFERENCES `teamcreziosp`.`professor` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `teamcreziosp`.`avaliacao_fisica`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teamcreziosp`.`avaliacao_fisica` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `aluno` INT NOT NULL,
  `professor` INT NOT NULL,
  `data` DATE NOT NULL,
  `hora` TIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Avaliacao_fisica_Aluno1_idx` (`aluno` ASC) VISIBLE,
  INDEX `fk_Avaliacao_fisica_Professor1_idx` (`professor` ASC) VISIBLE,
  CONSTRAINT `fk_Avaliacao_fisica_Aluno1`
    FOREIGN KEY (`aluno`)
    REFERENCES `teamcreziosp`.`aluno` (`id`),
  CONSTRAINT `fk_Avaliacao_fisica_Professor1`
    FOREIGN KEY (`professor`)
    REFERENCES `teamcreziosp`.`professor` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `teamcreziosp`.`graduacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teamcreziosp`.`graduacao` (
  `id` INT NOT NULL,
  `aluno` INT NOT NULL,
  `professor` INT NOT NULL,
  `data` DATE NOT NULL,
  `hora` TIME NOT NULL,
  `graduacao` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Graduacao_Aluno1_idx` (`aluno` ASC) VISIBLE,
  INDEX `fk_Graduacao_Professor1_idx` (`professor` ASC) VISIBLE,
  CONSTRAINT `fk_Graduacao_Aluno1`
    FOREIGN KEY (`aluno`)
    REFERENCES `teamcreziosp`.`aluno` (`id`),
  CONSTRAINT `fk_Graduacao_Professor1`
    FOREIGN KEY (`professor`)
    REFERENCES `teamcreziosp`.`professor` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `teamcreziosp`.`agendamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teamcreziosp`.`agendamento` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `aula` INT NOT NULL,
  `aluno` INT NOT NULL,
  `status` TINYINT(1) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_aula` (`aula` ASC) VISIBLE,
  INDEX `fk_aluno` (`aluno` ASC) VISIBLE,
  CONSTRAINT `fk_aluno`
    FOREIGN KEY (`aluno`)
    REFERENCES `teamcreziosp`.`aluno` (`id`),
  CONSTRAINT `fk_aula`
    FOREIGN KEY (`aula`)
    REFERENCES `teamcreziosp`.`aula` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
