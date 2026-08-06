const n1 = 6
const n2 = 10

function multiplicar(n1, n2){
    return n1 * n2;
};

document.write(`<p>A multiplicação de ${n1} por ${n2} é <strong>${multiplicar(n1, n2)}</strong><p/>`)



const number = 4;

function parImpar(number) {
  if (number % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}

document.write(`<p>O número ${number} é <strong>${parImpar}</strong></p>`);
