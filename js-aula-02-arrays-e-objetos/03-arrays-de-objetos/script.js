// OBJETO

const produto = {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC moderno com bom desempenho"
};

document.write(`<p>${produto}</p>`);

// ACESSANDO OS ATRIBUTOS DO OBJETO

document.write(`<p>${produto.nome}, ${produto.marca}, custa R$${produto.preco} <br> ${produto.descricao}</p>`);

// ARRAY DE OBJETOS

document.write("<h3>Array de objetos: </h3>")

const listaProdutos = [
    {
        nome: "Computador",
        marca: "Lenovo",
        preco: 3000,
        descricao: "PC moderno com bom desempenho"
    }, 
    {
        nome: "Tablet",
        marca: "Samsung",
        preco: 2000,
        descricao: "Ótima velocidade de processamento"
    }, 
    {
        nome: "Iphone",
        marca: "Apple",
        preco: 13000,
        descricao: "Ultra resistente! Não quebra nunca"
    }
];

// EXIBINDO AS INFORMAÇÕES DOS PRODUTOS COM FOREACH

document.write(`<h4> Produtos em promoção: </h4>`);

listaProdutos.forEach(produto => {
    document.write(`
        Produto: ${produto.nome} <br>
        Marca: ${produto.marca} <br>
        Preço: R$ ${produto.preco} <br>
        Descrição: ${produto.descricao} <br> <br>
        `)
})