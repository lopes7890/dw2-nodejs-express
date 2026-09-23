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

export default route;