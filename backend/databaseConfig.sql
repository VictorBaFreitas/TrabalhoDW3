CREATE DATABASE mod_financeiro;

\c mod_financeiro;

CREATE TABLE banco (
    idBanco INT PRIMARY KEY AUTO_INCREMENT,
    nomeBanco VARCHAR(255) NOT NULL,
    codigoBanco VARCHAR(20) NOT NULL,
    dataCadastro DATE NOT NULL,
    taxaServico DECIMAL(10, 2) NOT NULL,
    removido BOOLEAN DEFAULT FALSE,
    CONSTRAINT UC_codigoBanco UNIQUE (codigoBanco)
);

INSERT INTO banco (nomeBanco, codigoBanco, dataCadastro, taxaServico) VALUES 
    ('Banco do Brasil', '001', '2024-11-01', 0.50),
    ('Caixa Econômica Federal', '104', '2024-11-05', 0.30),
    ('Banco Santander', '033', '2024-11-10', 0.45);

CREATE TABLE IF NOT EXISTS usuarios (
    usuarioid BIGSERIAL CONSTRAINT pk_usuarios PRIMARY KEY,
    username VARCHAR(10) UNIQUE,
    password TEXT,
    removido BOOLEAN DEFAULT false
);

CREATE EXTENSION IF NOT EXISTS pgcrypto;

INSERT INTO usuarios VALUES
    (default, 'admin', crypt('admin', gen_salt('bf'))), 
    (default, 'usuario', crypt('usuario', gen_salt('bf')))
ON CONFLICT DO NOTHING;