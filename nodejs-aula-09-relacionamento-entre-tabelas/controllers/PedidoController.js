import express from "express";
import Pedido from "../models/Pedido.js";
// Importanto o Model de Cliente
import Cliente from "../models/Cliente.js";

const route = express.Router();

// ROTA PEDIDOS
route.get("/pedidos", function (req, res) {
  Promise.all([
    // Listando todos os pedidos
    Pedido.findAll({
      // Trazendo os dados dos Clientes juntos com os pedidos (innerJoin)
      include: [
        {
          model: Cliente, // inclui a tabela de clientes no SELECT
          required: true, // Opcional: Garante que somente Pedidos ou Clientes associados que sejam retornados
        },
      ],
    }),
    // Selecionando todos os clientes
    Cliente.findAll(),
  ]).then(([pedidos, clientes]) => {
      res.render("pedidos", {
        pedidos: pedidos,
        clientes: clientes
      });
    }).catch((error) => {
      console.log(`Erro ao listar os pedidos. Erro: ${error}`);
    });
});

// Rota de cadastro de pedidos
route.post("/pedidos/cadastrar", (req, res) => {
    // Capturando os dados do formulário
    const numero = req.body.numero;
    const valor = req.body.valor;
    const clienteId = req.body.clienteId;
    Pedido.create({
        numero: numero,
        valor: valor,
        cliente_id: clienteId
    }).then(() => {
        res.redirect("/pedidos");
    }).catch(error => {
        console.log(`Erro ao cadastrar o pedido. ${error}`)
    });
});

route.get("/pedidos/excluir/:id", (req, res) => {
  const id = req.params.id;
  Pedido.destroy({
    where: { id: id },
  })
    .then(() => {
      res.redirect("/pedidos");
    })
    .catch((error) => {
      console.log(`Erro ao excluir pedidio. Erro ${error}`);
    });
});

route.get("/pedidos/editar/:id", (req, res) => {
  const id = req.params.id;
  Pedido.findByPk(id)
    .then((pedido) => {
      res.render("pedidosEditar", {
        pedido: pedido,
      });
    })
    .catch((error) => {
      console.log(`Erro ao buscar usuário. Erro ${error}`);
    });
});

route.post("/pedidos/alterar", (req, res) => {
  const id = req.body.id;
  const numero = req.body.numero;
  const valor = req.body.valor;

  Pedido.update(
    {
      numero: numero,
      valor: valor,
    },
    {
      where: { id: id },
    },
  )
    .then(() => {
      res.redirect("/pedidos");
    })
    .catch((error) => {
      console.log(`Não foi possivel alterar o pedido. Erro: ${error}`);
    });
});

export default route;
