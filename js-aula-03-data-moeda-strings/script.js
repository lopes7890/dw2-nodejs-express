document.write("<h3>Manipulando datas:</h3>");

// Para comecarmos a manipular datas no JavaScript,
// precisamos primeiro criar uma instância da classe Date, que é nativa do JavaScript

const dataAtual = new Date();

document.write(dataAtual);

// Pegando o dia atual
const dia = dataAtual.getDate();
document.write(`<p>Hoje é dia ${dia}</p>`);

const mes = dataAtual.getMonth() + 1;
document.write(`<p>Estamos no mês ${mes}</p>`);

const ano = dataAtual.getFullYear();
document.write(`<p>O ano em que nós estamos é ${ano}</p>`);

// Exibindo data complea
document.write(`Data de hoje: ${dia}/${mes}/${ano}`);



// Adicionando dias, meses e anos a data atual

// Adicionando 4 dias a data atual:
dataAtual.setDate(dataAtual.getDate() + 4);

// Exibindo a nova data:
document.write(`<p> Daqui a 4 dias será dia ${dataAtual.getDate()}.`);

// Adicionando 3 meses a data atual:
dataAtual.setMonth(dataAtual.getMonth() + 3);

// Exibindo a nova data:
document.write(`<p> Daqui a 3 meses será ${dataAtual.getMonth() + 1}.`);

// Adicionando 2 anos a data atual:
dataAtual.setFullYear(dataAtual.getFullYear() + 2);

// Exibindo a nova data:
document.write(`<p> Daqui a 2 anos será ${dataAtual.getFullYear()}.`);

// ################################################################################

// FORMATAÇÃO DE MOEDA
document.write("<h3>Manipulando números e moedas: </h3>");

const futuroSalario = 40000.3;
document.write(`<p>${futuroSalario}</p>`);

// Mostrando casas decimais
document.write(`<p>${futuroSalario.toFixed(2)}</p>`);
// Ocultando casas decimais
document.write(`<p>${futuroSalario.toFixed(0)}</p>`);

// Trocando o identificador de casas decimais
document.write(`<p>${futuroSalario.toFixed(2).replace(".", ",")}</p>`);

// FORMATANDO PARA REAL (R$)
document.write(`<p> ${futuroSalario.toLocaleString("pt-br", {
    style: "currency", 
    currency: "BRL"
    })} 
</p>`);

// FORMATANDO PARA DOLAR (USD)
document.write(`<p> ${futuroSalario.toLocaleString("en", {
    style: "currency", 
    currency: "USD"
    })} 
</p>`);

// FORMATANDO PARA DOLAR (USD) NO FORMATO REAL (R$)
document.write(`<p> ${futuroSalario.toLocaleString("pt-br", {
    style: "currency", 
    currency: "USD"
    })} 
</p>`);

// ################################################################################

// FORMATAÇÕES DE STRINGS

document.write("<h3>Formatação de Strings: </h3>");

const nome = "Allison";

document.write(`<p>${nome.toUpperCase()}</p>`);

document.write(`<p>${nome.toLowerCase()}</p>`);

// COLOCANDO AS INICIAIS EM LETRAS MAIÚSCULAS
const cidade = "sete barras";
const cidadeFormatada = cidade.split(" ").map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)).join(" ");
// Exibindo
document.write(`<p>${cidadeFormatada}</p>`);

// CONTANDO NÚMERO DE CARACTERES
document.write(`<p> Seu nome tem ${nome.replace(/\s/g, "").length} letras</p>`);