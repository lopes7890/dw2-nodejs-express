// MÉTODOS DE MANIPULAÇÃO DE VETORES

let frutas = ['Laranja', 'Maçã', 'Banana'];

document.write(`<p> Os itens do nosso vetor são: ${frutas} </p>`);

frutas[3] = 'Morango';

document.write(`<p> Agora a lista é: ${frutas}</p>`);

// MÉTODO PUSH: insere um novo elemento no final do vetor

frutas.push('Abacaxi');

document.write(`<p>Agora a lista é: ${frutas}</p>`);

// MÉTODO UNSHIFT: Insere um novo elemento no inicio do vetor

//frutas[0] = 'Pera';

document.write(`<p>Agora a lista é: ${frutas}</p>`);

frutas.unshift('Pera');

document.write(`<p>Agora a lista é: ${frutas}</p>`);

// MÉTODO LENGTH: Retorna o número de elementos no vetor;

document.write(`<p>Agora a lista tem: ${frutas.length} frutas</p>`);

// MÉTODO SORT: Ordena os itens do vetor
document.write(`<p>O primeiro item da lista é ${frutas[0]}</p>`);

let frutasOrdenadas = frutas.sort();

document.write(`<p>O primeiro item da lista é ${frutasOrdenadas[0]}</p>`);

document.write(`'<p>Lista de frutas ordenadas: ${frutasOrdenadas}</p>`)

// MÉTODO SORT: Odenando em ordem CRESCENTE e DECRESCENTE

let numeros = [6, 8, 2, 9, 3, 800, 200];

document.write(`<p>Os números são: ${numeros}</p>`);

document.write(`<p>Os números ordenados são: ${numeros.sort()}</p>`);

// ORDENANDO CORRETAMENTE OS NÚMEROS

// ORDEM CRESCENTE
document.write(`<p>Os números ordenados de forma crescente são: ${numeros.sort((a, b) => a - b)}</p>`);

// ORDEM DECRESCENTE
document.write(`<p>Os números ordenados de forma decrescente são: ${numeros.sort((a, b) => b - a)}</p>`);