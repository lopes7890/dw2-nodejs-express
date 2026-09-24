import express from 'express';
import Cliente from '../models/Cliente.js';

const route = express.Router();

// ROTA CLIENTES
route.get("/clientes",function(req,res){
    // Selecionando todos os clientes do Banco de Dados
    Cliente.findAll().then((clientes) => {
        res.render("clientes", {
            // Enviando a lista de clientes para a página HTML
            clientes : clientes
        });
    }).catch((error) => {
        console.log(`Ocorreu um erro ao listar os clientes: ${error}`);
    });
})

// Rota de cadastro de Clientes
route.post("/clientes/cadastrar", (req, res) => {
    // Capturando os dados vindo do formulário e gravando nas variáveis
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const endereco = req.body.endereco;

    // chamando o model para gravar os dados no banco
    // equivalente ao INSERT INTO...
    Cliente.create({
        // NOME DA COLUNA NO BANCO / VARIÁVEL
        nome: nome,
        cpf: cpf,
        endereco: endereco
    }).then(() => {
        res.redirect("/clientes");
    }).catch((error) => {
        console.log(`Ocorreu um erro ao cadastrar o cliente: Erro ${error}`);
    });
});

export default route;