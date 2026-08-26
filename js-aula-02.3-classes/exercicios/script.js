class Heroi {

    constructor(nome, vida, velocidade, forca){
        this.nome = nome,
        this.vida = vida,
        this.velocidade = velocidade,
        this.forca = forca
    }

    correr(){
        return "<p>O herói está correndo</p>";
    }

    andar(){
        return "<p>O herói está andando</p>";
    }

    atacar(){
        return "<p>O herói está atacando</p>";
    }

    defender(){
        return "<p>O herói está defendendo</p>";
    }

}

const homemAranha = new Heroi("Homem-Aranha", 100, 90, 100);

homemAranha.teia = 1;

homemAranha.sentidoAranha = function(){
    return "<p>Perigo detectado</p>";
}

const superMan = new Heroi("Super Man", 100, 100, 100);

superMan.podeVoar = 1;
superMan.visaoCalor = function(){
    return "<p>Utilizando visão de calor</p>";
}

const batman = new Heroi("Batman", 100, 80, 80);
batman.escoder = 1;
batman.investigar = function(){
    return "<p>Investigando o crime</p>";
}

document.write(`<p> ${superMan.nome}</p>`);
document.write(batman.correr());
document.write(homemAranha.sentidoAranha());
