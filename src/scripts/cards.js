// CLasse para gerenciar as cartas e suas ações
class CardManager {
    // Atributos
    flippedCards = new Set();
    urlFactory;

    // Construtor -> Irá receber uma outra função dentro dele
    constructor(factory) {
        // Atribuir essa função ao atributo urlFactory
        this.urlFactory = factory;
    }
    // Gen --> Sua função é gerar uma carta.
    gen(Hero_number) {
        let template = document.getElementById("cardTemplate"); // Referenciar o template
        let clone = template.content.cloneNode(true);           // Criar um clone

        // Retornar o clone
        return clone;
    }
}