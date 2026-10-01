import express from 'express';
import Pedido from '../models/Pedido.js';
import { where } from 'sequelize';

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

route.get("/pedidos/excluir/:id", (req, res) => {
    const id = req.params.id;
    Pedido.destroy({
        where: {id: id}
    }).then(() => {
        res.redirect("/pedidos");
    }).catch((error) => {
        console.log(`Erro ao excluir pedidio. Erro ${error}`);
    });
});

route.get("/pedidos/editar/:id", (req, res) => {
    const id = req.params.id;
    Pedido.findByPk(id).then(pedido => {
        res.render("pedidosEditar", {
            pedido: pedido,
        });
    }).catch((error) => {
        console.log(`Erro ao buscar usuário. Erro ${error}`);
    });
});

route.post("/pedidos/alterar", (req, res) => {
    const id = req.body.id
    const numero = req.body.numero
    const valor = req.body.valor

    Pedido.update(
        {
            numero: numero,
            valor: valor
        },
        {
            where: {id: id}
        }
    ).then(() => {
        res.redirect("/pedidos")
    }).catch((error) => {
        console.log(`Não foi possivel alterar o pedido. Erro: ${error}`)
    });
});

export default route;