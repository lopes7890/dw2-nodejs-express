// index.js: arquivo principal do back-end

// importando o Express.js para o projeto

const express = require("express"); // Forma clássica (CommonJS Modules)

const app = express(); // Criando uma instância do Express

// CONFIGURANDO O EJS
app.set('view engine', 'ejs'); // EJS renderiza as páginas do site

// AQUI IRÃO AS ROTAS DO SITE:

// ROTA PRINCIPAL:

// O GET cria uma rota do tipo GET na aplicação
app.get("/", (req, res) => {
    res.render('index');
});

// ROTA DE PRODUTOS
app.get("/produtos", (req, res) => {
    res.render('produtos');

});

// ROTA DE SERVICO
app.get("/servicos", (req, res) => {
    res.render('servicos');
})

// ROTA DE CLIENTES
app.get("/clientes", (req, res) => {
    res.render('clientes');
})

// ROTA DE PERFIL
app.get("/perfil", (req, res) => {
    res.render('perfil')
})

// Método do express para iniciar o servidor
// Iniciando o servidor na porta 8080
const port = 8080
app.listen(port, (error) => {
    // Tratando erros de inicialização
    if (error){
        console.log(`Ocorreu um erro ao iniciar o servidor. Erro: ${error}`);
    // Em caso de sucesso
    } else {
        console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
    }
});

