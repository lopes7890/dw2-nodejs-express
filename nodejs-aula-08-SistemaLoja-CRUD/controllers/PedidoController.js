import express from 'express';
import Pedido from '../models/Pedido.js';

const route = express.Router();

// ROTA PEDIDOS
route.get("/pedidos",function(req,res){
    Pedido.findAll().then((pedidos) => {
        res.render("pedidos", {
            pedidos: pedidos
        });
    }).catch((error) => {
        console.log(`Erro ao buscar pedidos: Erro ${error}`);
    });

});

export default route;