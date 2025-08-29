class Aluno {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Oi, eu sou ${this.nome} e tenho ${this.idade} anos.`);
    }
}

const aluno1 = new Aluno("Fulano",67)
const aluno2 = new Aluno("Fulaninho",68)

aluno1.apresentar();
aluno2.apresentar();