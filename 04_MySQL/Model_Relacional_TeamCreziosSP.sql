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
CREATE SCHEMA IF NOT EXISTS `teamcreziosp` DEFAULT CHARACTER SET utf8mb4 ;
USE `teamcreziosp` ;

-- -----------------------------------------------------
-- Table `teamcreziosp`.`planos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teamcreziosp`.`planos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(30) NOT NULL,
  `qtd_aulas` INT NOT NULL,
  `taxa_matricula` DECIMAL(10,2) DEFAULT NULL,
  `kimono` DECIMAL(10,2) DEFAULT NULL,
  `ferias` TINYINT(1) DEFAULT 0,
  `convidado` DECIMAL(1) DEFAULT 0,
  `transferivel` TINYINT(1) DEFAULT 0,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

-- -----------------------------------------------------
-- Table `teamcreziosp`.`modalidade_plano`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS teamcreziosp.modalidade_plano (
	id INT NOT NULL AUTO_INCREMENT,
    plano INT NOT NULL,
    valor_parcela DECIMAL(10,2) NOT NULL,
    numero_parcela INT NOT NULL,
    PRIMARY KEY (id),
    INDEX fk_Modalidade_Plano_idx (plano ASC) VISIBLE,
    CONSTRAINT fk_Modalidade_Plano
	FOREIGN KEY (plano) 
	REFERENCES teamcreziosp.planos (id))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `teamcreziosp`.`convidado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS teamcreziosp.convidado (
	id INT NOT NULL AUTO_INCREMENT,
	nome VARCHAR(30),
	aluno_id INT NOT NULL,
	PRIMARY KEY (id),
  INDEX fk_Convidado_idx (aluno_id ASC) VISIBLE,
  CONSTRAINT fk_Convidado
    FOREIGN KEY (aluno_id)
    REFERENCES teamcreziosp.aluno(id))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `teamcreziosp`.`tipo_planos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS teamcreziosp.tipos_planos (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(30) NOT NULL,
  descricao VARCHAR(50),
  PRIMARY KEY (id))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


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
  `graduacao` VARCHAR(30) NULL DEFAULT NULL,
   endereco INT, 
  `exame_medico` VARCHAR(255) NULL DEFAULT 'Pendente',
  `aulas_prox_grad` INT NULL DEFAULT NULL,
  `plano` INT NOT NULL,
  `status_plano` VARCHAR(20) NOT NULL,
  `usuario` VARCHAR(30) NOT NULL,
  `senha` VARCHAR(255) NOT NULL,
  `tipo_user` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Aluno_Plano_idx` (`plano` ASC) VISIBLE,
  INDEX fk_Aluno_Endereco_idx (endereco ASC) VISIBLE,
  CONSTRAINT `fk_Aluno_Plano`
    FOREIGN KEY (`plano`)
    REFERENCES `teamcreziosp`.`planos` (`id`),
  CONSTRAINT fk_Aluno_Endereco
    FOREIGN KEY (endereco)
    REFERENCES teamcreziosp.enderecos(id))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `teamcreziosp`.`enderecos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS teamcreziosp.enderecos (
  id INT NOT NULL,
  CEP VARCHAR(10) NOT NULL,
  rua VARCHAR(30) NOT NULL,
  cidade VARCHAR(30) NOT NULL,
  estado VARCHAR(30) NOT NULL,
  numero VARCHAR(10) NOT NULL,
  PRIMARY KEY(id))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

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
  `endereco` INT NOT NULL,
  `tipo_user` VARCHAR(30) NOT NULL,
   usuario VARCHAR(30) NOT NULL,
  `senha` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX fk_Professor_Endereco_idx (endereco ASC) VISIBLE,
  CONSTRAINT fk_Professor_Endereco
    FOREIGN KEY (endereco) 
    REFERENCES teamcreziosp.enderecos(id))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `teamcreziosp`.`aula`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teamcreziosp`.`aula` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `professor` INT NOT NULL,
  `data` DATE NOT NULL,
  `hora` TIME NOT NULL,
  `sexo_indicado` VARCHAR(20) NULL DEFAULT NULL,
  `plano` VARCHAR(30) NOT NULL,
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
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `teamcreziosp`.`avaliacao_fisica`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teamcreziosp`.`avaliacao_fisica` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `aluno` INT NOT NULL,
  `professor` INT NOT NULL,
  `data` DATE NOT NULL,
  `hora` TIME NOT NULL,
  `peso` DECIMAL(10,2) NOT NULL,
  `altura` DECIMAL(10,2) NOT NULL,
  `percentual_gordura` DECIMAL(10,2) NOT NULL,
  `coxa` DECIMAL(10,2) NOT NULL,
  `toracica` DECIMAL(10,2) NOT NULL,
  `axilar_media` DECIMAL(10,2) NOT NULL,
  `triceps` DECIMAL(10,2) NOT NULL,
  `subescapular` DECIMAL(10,2) NOT NULL, 
  `abdominal` DECIMAL(10,2) NOT NULL,
  `suprailíaca` DECIMAL(10,2) NOT NULL,
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
DEFAULT CHARACTER SET = utf8mb4;


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
DEFAULT CHARACTER SET = utf8mb4;

-- -----------------------------------------------------
-- Table `teamcreziosp`.`tipo_faixas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS teamcreziosp.tipo_faixas (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(30) NOT NULL,
  nivel INT,
  PRIMARY KEY (id))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

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
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
