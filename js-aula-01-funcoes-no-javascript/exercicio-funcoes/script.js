// Função simples 
// 1 – Crie uma função simples que exiba no console seu nome, sua idade e sua cidade. (Não esqueça de 
// chamar a função no final). 

document.writeln("<h3> Exercicio 1</h3>");
function informacoes(){
    document.write("<p>Nome: Allison Lopes</p>");
    document.write("<p>Idade: 18 anos</p>");
    document.write("<p>Cidade: Cananéia</p>");
}

informacoes();

// Função com parâmetros 
// 2 – Crie uma função que receba dois números como parâmetro em seguida faça a divisão entre eles. O 
// resultado deve ser exibido no console concatenado com uma string. (Ex: “O resultado da divisão foi...”). A 
// função deve ser chamada ao final passando dois números como argumento. 

document.writeln("<h3> Exercicio 2</h3>");

function dividir(x, y){
    document.write(`<p>O resultado da divisão entre ${x} e ${y} é: `, x / 2);
}

const x = 10;
const y = 2;
dividir(x, y);


document.writeln("<h3> Exercicio 3</h3>");

// Função com retorno 
// 3 – Crie uma função que receba três números e retorne a multiplicação entre esses números. O resultado 
// deve ser exibido no console. 

function mult(a, b, c){
    return a * b * c;
}

const a = 10;
const b = 5;
const c = 2

document.write(`A multiplicação entre ${a}, ${b} e ${c} é: ${mult(a, b, c)}`);

// Função com mais de um retorno 
// 4 – Crie uma função que receba uma idade como parâmetro. Se a idade for >= 18, a função deve retornar 
// o valor “Maior de idade”, se não deve retornar “Menor de idade”. O resultado deve ser exibido no console. 

document.writeln("<h3> Exercicio 4</h3>");

function VerificaIdade(idade){
    if (idade >= 18){
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}

const idade = 19;

document.write(`<p>${VerificaIdade(idade)}</p>`);

document.writeln("<h3> Exercicio 5</h3>");

// Função anônima 
// 5 – Crie uma função anônima que receba duas notas como parâmetro. Se a média dessas notas for <=5, a 
// função deve retornar o valor “Reprovado”, se não deve retornar o valor “Aprovado”.  O resultado deve ser 
// exibido no console. Considere média = (nota1 + nota2) / 2. 

const calcularMedia = function(n1, n2) {
    if ((n1 + n2) / 2 <= 5){
        return "Reprovado";
    } else {
        return "Aprovado";
    };
}

document.writeln(`<p>Sua situação é ${calcularMedia(10, 10)}</p>`);

document.writeln("<h3> Exercicio 6</h3>");

// Arrow function com parâmetro único 
// 6 – Crie uma arrow function que receba um número como parâmetro e retorne o triplo desse número. O 
// resultado deve ser exibido no console concatenado com uma string. (Ex: “O triplo do número é...”) 

const triplo = (f) => {
    return f * 3;
}

const f = 10

document.write(`O triplo de ${f} é ${triplo(f)}`);

document.writeln("<h3> Exercicio 7</h3>");

// Arrow function com mais de um parâmetro 
// 7 – Crie uma arrow function que receba quatro números como parâmetro e retorne a soma entre esses 
// números. O resultado deve ser impresso no console. 

const somando = (number1, number2, number3, number4) => {
    return number1 + number2 + number3 + number4;
}

const number1 = 10;
const number2 = 10;
const number3 = 10;
const number4 = 10;

document.write(`<p>A soma entre ${number1}, ${number2}, ${number3} e ${number4} é ${somando(number1, number2, number3, number4)}</p>`);

document.writeln("<h3> Exercicio 8</h3>");

// IIFE 
// 8 – Crie uma função imediata que receba o nome de uma pessoa como parâmetro e exiba no console uma 
// saudação a essa pessoa. 

const saudacao = (function (nome) {
    document.write(`<p>Olá <strong>${nome}</strong>, seja bem-vindo!</p>`);
})("Allison");