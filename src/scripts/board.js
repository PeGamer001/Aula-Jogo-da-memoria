class BoardManager {
    // Dependencias -> Objeto pra manipular as cartas dentro do tabuleiro
    cardManager;

    // Elementos DOM -> Receberá a referência dos elementos
    node;

    // Numeros Contagem
    numImgs;     // -> Numeros de diferentes imagens dentro da pasta img
    curNumCards; // -> Proximos numeros de cartas no tabuleiro

    // Constructor
    constructor(id, numImgs, cardManager) {
        // Trazer o elemento que for enviado pelo ID
        this.node = document.getElementById(id);

        // Setando propriedades restantes
        this.numImgs = numImgs;
        this.cardManager = cardManager;
    }
    // Apaga todo o tabuleiro
    Clear(){
        this.node.innerHTML = ""

    }
    // Fill
    Fill(numberCards){}
    addCard(card){}



}
