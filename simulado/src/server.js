const express = require("express");
const conexao = require("./conexao");

const app = express();

app.use(express.json());

app.get("/produtos", (req, res) => {
    conexao.query("SELECT * FROM produto", (erro, resultado) => {
        if (erro) return res.send("Erro");
        res.json(resultado);
    });
});

app.post("/produtos", (req, res) => {
    const { nome, categoria_id, quantidade, valor_unitario } = req.body;

    const sql = "INSERT INTO produto VALUES (NULL, ?, ?, ?, ?)";

    conexao.query(
        sql,
        [nome, categoria_id, quantidade, valor_unitario],
        (erro) => {
            if (erro) return res.send("Erro");
            res.send("Produto cadastrado");
        }
    );
});

app.post("/entradas", (req, res) => {
    const { produto_id, quantidade, data_entrada } = req.body;

    const sql = "INSERT INTO entrada VALUES (NULL, ?, ?, ?)";

    conexao.query(sql, [produto_id, quantidade, data_entrada], (erro) => {
        if (erro) return res.send("Erro");
        res.send("Entrada registrada");
    });
});

app.post("/saidas", (req, res) => {
    const { produto_id, quantidade, data_saida } = req.body;

    const sql = "INSERT INTO saida VALUES (NULL, ?, ?, ?)";

    conexao.query(sql, [produto_id, quantidade, data_saida], (erro) => {
        if (erro) return res.send("Erro");
        res.send("Saída registrada");
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});