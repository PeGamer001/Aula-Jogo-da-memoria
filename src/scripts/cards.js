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

        // Capturar os cliques nas cartas
        clone.children[0].addEventListener("click",
            event => this.onClick(event)
        )

        // Retornar o clone
        return clone;
    }
// Capture eventos de clique
    onClick(event) {
        this.flip(event.target)
    }
// Vira a carta
    flip(cardNode) {
        cardNode.children[0].classList.add("selected");
    }
// Desvira a carta
    unFlip(cardNode) {
        cardNode.children[0].classList.remove("selected");
    }
// Método que desabilita o movimento da carta que já foi virada
    disable(cardNode) {
        cardNode.children[0].classList.remove("matched");
        this.unFlip(cardNode);
    }


}