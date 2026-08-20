// Crie um array chamado estoqueProdutos que contenha pelo menos três objetos. Cada objeto
// deve representar um produto com as seguintes propriedades: nome (string), marca (string),
// preco (number) e descricao (string).

document.write("<h3>Exercício 1</h3>");

const estoqueProdutos = [{
    nome: "Notebook",
    marca: "Dell",
    preco: 3500,
    descricao: "Notebook Dell Inspiron 15"
}, {
    nome: "Smartphone",
    marca: "Samsung",
    preco: 2500,
    descricao: "Smartphone Samsung Galaxy S21"
}, {
    nome: "Tablet",
    marca: "Apple",
    preco: 3000,
    descricao: "Tablet Apple iPad"
}];

// Utilize um loop forEach para percorrer o estoqueProdutos e exibir no navegador, para cada
// produto, as informações no formato: Produto: [Nome do Produto] Marca: [Marca do Produto]
// Preço: R$ [Preço do Produto] Descrição: [Descrição do Produto] Utilize document.write e <br>
// para quebrar as linhas.

document.write("<h3>Exercício 2</h3>");

estoqueProdutos.forEach(produto => {
    document.write(`Produto: ${produto.nome} <br> Marca: ${produto.marca} <br> Preço: R$ ${produto.preco} <br> Descrição: ${produto.descricao} <br><br>`);
});

// Adicione um novo produto ao final do estoqueProdutos utilizando o método push(). Exiba o
// array atualizado no navegador

document.write("<h3>Exercício 3</h3>");

estoqueProdutos.push({
    nome: "Fone de Ouvido",
    marca: "Sony",
    preco: 500,
    descricao: "Fone de Ouvido Sony"
});

document.write("<h3>Array atualizado (push):</h3>");
estoqueProdutos.forEach(produto => {
    document.write(`Produto: ${produto.nome} <br> Marca: ${produto.marca} <br> Preço: R$ ${produto.preco} <br> Descrição: ${produto.descricao} <br><br>`);
});

// Adicione um novo produto ao início do estoqueProdutos utilizando o método unshift(). Exiba o
// array atualizado no navegador.

document.write("<h3>Exercício 4</h3>");

estoqueProdutos.unshift({
    nome: "Smartwatch",
    marca: "Garmin",
    preco: 1500,
    descricao: "Smartwatch Garmin"
});

document.write("<h3>Array atualizado (unshift):</h3>");
estoqueProdutos.forEach(produto => {
    document.write(`Produto: ${produto.nome} <br> Marca: ${produto.marca} <br> Preço: R$ ${produto.preco} <br> Descrição: ${produto.descricao} <br><br>`);
});

// Ordene o estoqueProdutos em ordem crescente de preço e exiba o array ordenado no
// navegador. Utilize document.write para exibir os produtos, formatando o preço para duas
// casas decimais e com o símbolo R$. Utilize o método sort() com uma função de comparação.

document.write("<h3>Exercício 5</h3>");

estoqueProdutos.sort((a, b) => a.preco - b.preco);

document.write("<h3>Array ordenado por preço:</h3>");
estoqueProdutos.forEach(produto => {
    document.write(`Produto: ${produto.nome} <br> Marca: ${produto.marca} <br> Preço: R$ ${produto.preco.toFixed(2)} <br> Descrição: ${produto.descricao} <br><br>`);
});

