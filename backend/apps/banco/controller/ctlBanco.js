const mdlBanco = require("../model/mdlBanco");

const GetAllBanco = (req, res) =>
    (async () => {
        let registro = await mdlBanco.GetAllBanco();
        for (let i = 0; i < registro.length; i++) {
            const row = registro[i];   
            const formattedDate = row.datacadastro.toISOString().split('T')[0];
            row.datacadastro = formattedDate;
            
        }
        res.json({ status: "ok", registro: registro });
    })();

const GetBancoByID = (req, res) =>
    (async () => {
        const idbanco = parseInt(req.body.idbanco);
        let registro = await mdlBanco.GetBancoByID(idbanco);

        res.json({ status: "ok", registro: registro });
    })();

const InsertBanco = (request, res) =>
    (async () => {
        const registro = request.body;
        let { msg, linhasAfetadas } = await mdlBanco.InsertBanco(registro);
        res.json({ status: msg, linhasAfetadas: linhasAfetadas });
    })();

const UpdateBanco = (request, res) =>
    (async () => {
        const registro = request.body;
        let { msg, linhasAfetadas } = await mdlBanco.UpdateBanco(registro);
        res.json({ status: msg, linhasAfetadas: linhasAfetadas });
    })();

const DeleteBanco = (request, res) =>
    (async () => {
        const registro = request.body;
        let { msg, linhasAfetadas } = await mdlBanco.DeleteBanco(registro);
        res.json({ status: msg, linhasAfetadas: linhasAfetadas });
    })();

module.exports = {
    GetAllBanco,
    GetBancoByID,
    InsertBanco,
    UpdateBanco,
    DeleteBanco
};