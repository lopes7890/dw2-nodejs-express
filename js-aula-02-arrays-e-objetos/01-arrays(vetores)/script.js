
document.write("<p>O tipo de variável que recebe um vetor no Javascript é: <strong> object </strong></p>")

const produtos = ["Computador", "Notebook", "Celular", "Tablet"]

document.write(`<p>${produtos[0]}</p>`);
document.write(`<p>${produtos[1]}</p>`);
document.write(`<p>${produtos[2]}</p>`);
document.write(`<p>${produtos[3]}</p>`);

document.write("<br> <p> Exibindo os itens do vetor através do <strong> forEach </strong> </p>");

produtos.forEach(produto => {
    document.write(`<p>${produto}</p>`);
});

document.write("<br> <p> Exibindo os itens do vetor e os indices com o forEach: </p>")

produtos.forEach((produto, indice) => {
    document.write(`<p> ${indice + 1} - ${produto} </p>`)
})