const db = require("../../../database/databaseConfig");

const GetAllBanco = async () => {
    return (
        await db.query(
            "SELECT * " + "FROM banco where removido = false ORDER BY codigoBanco"
        )
    ).rows;
};

const GetBancoByID = async (idBancoPar) => {
    return (
        await db.query(
            "SELECT * " +
            "FROM banco WHERE idBanco = $1 and removido = false ORDER BY codigoBanco",
            [idBancoPar]
        )
    ).rows;
};

const InsertBanco = async (registroBancoPar) => {
    let linhasAfetadas;
    let msg = "ok";
    try {
        linhasAfetadas = (
            await db.query(
                "INSERT INTO banco (idBanco, nomeBanco, codigoBanco, dataCadastro, taxaServico, removido) values ($1, $2, $3, $4, $5, $6)",
                [
                    registroBancoPar.idBanco,
                    registroBancoPar.nomeBanco,
                    registroBancoPar.codigoBanco,
                    registroBancoPar.dataCadastro,
                    registroBancoPar.taxaServico,
                    registroBancoPar.removido,
                ]
            )
        ).rowCount;
    } catch (error) {
        msg = "[mdlBanco|insertBanco] " + error.message;
        linhasAfetadas = -1;
    }

    return { msg, linhasAfetadas };
};

const UpdateBanco = async (registroBancoPar) => {
    let linhasAfetadas;
    let msg = "ok";
    try {
        linhasAfetadas = (
            await db.query(
                "UPDATE banco SET " +
                "nomeBanco = $2, " +
                "codigoBanco = $3, " +
                "dataCadastro = $4, " +
                "taxaServico = $5, " +
                "removido = $6 " +
                "WHERE idBanco = $1",
                [
                    registroBancoPar.idBanco,
                    registroBancoPar.nomeBanco,
                    registroBancoPar.codigoBanco,
                    registroBancoPar.dataCadastro,
                    registroBancoPar.taxaServico,
                    registroBancoPar.removido,
                ]
            )
        ).rowCount;
    } catch (error) {
        msg = "[mdlBanco|UpdateBanco] " + error.detail;
        linhasAfetadas = -1;
    }

    return { msg, linhasAfetadas };
};

const DeleteBanco = async (registroBancoPar) => {
    let linhasAfetadas;
    let msg = "ok";

    try {
        linhasAfetadas = (
            await db.query(
                "UPDATE banco SET " + "removido = true " + "WHERE idBanco = $1",
                [registroBancoPar.idBanco]
            )
        ).rowCount;
    } catch (error) {
        msg = "[mdlBanco|DeleteBanco] " + error.detail;
        linhasAfetadas = -1;
    }

    return { msg, linhasAfetadas };
};

module.exports = {
    GetAllBanco,
    GetBancoByID,
    InsertBanco,
    UpdateBanco,
    DeleteBanco,
};