const dataAtual = new Date();
document.write(dataAtual);

const dia = dataAtual.getDate();
const mes = dataAtual.getMonth() + 1;
const ano = dataAtual.getFullYear();

document.write(`<p>${dia}/${mes}/${ano}`);

const compraInternacional = 500.75;

document.write(`<p>${compraInternacional.toLocaleString("en", {
  style: "currency",
  currency: "USD",
})}
</p>`);

function dolarParaReal(valor) {
  const dolar = 5.16;
  return valor * dolar;
}

document.write(
  `<p> O valor em dolar é: ${compraInternacional.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  })} e o valor em real é: ${dolarParaReal(compraInternacional).toLocaleString(
    "pr-br",
    {
      style: "currency",
      currency: "BRL",
    },
  )}`,
);

dataAtual.setDate(dataAtual.getDate() + 12);
document.write(
  `<p> o pedido será entregue em 12 dias na data: ${dataAtual.getDate()}/${mes + 1}/${ano}</p>`,
);

const nome = "allison Lopes";

const nomeFormatado = nome
  .split(" ")
  .map((palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1))
  .join(" ");

document.write(`<p>Cliente: ${nomeFormatado}</p>`);
