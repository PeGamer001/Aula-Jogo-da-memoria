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
    Fill(numberCards){
        // Checar se o numero enviado de cartas for maior que o numero de imagens.
        if (numberCards > 2 * this.numImgs) {

            // Mostrar mensagem de erro
            console.error(`Erro: Não há imagens suficientes para ${numberCards} cartas.`);

            // Ajustar o numero de cartas, e continuar o jogo
            numberCards = 2 * this.numImgs;
        }
        
        this.Clear();                         // Limpar o tabuleiro
        this.addCard(this.cardManager.gen(1)) // Adicionar uma nova carta ao tabuleiro.
    }
    // AddCard -> Adiciona UMA carta no tabuleiro
    addCard(card){
        this.node.appendChild(card);

    }



}
