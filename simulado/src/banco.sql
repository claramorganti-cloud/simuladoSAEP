CREATE DATABASE almoxarifado;

USE almoxarifado;
CREATE TABLE categoria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50)
);

CREATE TABLE produto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
        categoria_id INT,
    quantidade INT,
    valor_unitario DECIMAL(10,2),
    FOREIGN KEY (categoria_id) REFERENCES categoria(id)
);

CREATE TABLE entrada (
    id INT AUTO_INCREMENT PRIMARY KEY,
        produto_id INT,
        quantidade INT,
        data_entrada DATE,
    FOREIGN KEY (produto_id) REFERENCES produto(id)
);

CREATE TABLE saida (
    id INT AUTO_INCREMENT PRIMARY KEY,
    produto_id INT,
    quantidade INT,
    data_saida DATE,
    FOREIGN KEY (produto_id) REFERENCES produto(id)
);

