//variaveis
let menu= document.getElementById('menu');
let select= document.getElementById('numCards');
let button= document.getElementById('start');

//fazer um loop for--> inicia no numero 4. menor oi igual a 10. incrementa 2 a cada loop

//variavel - condição - ação 
for(let i = 4;i <= 10;i += 2) {
    //valor que aparecerá no select multiplicado por ele mesmo
    let n = i * i;

    //opção que aparacerá para o usuario no select
    let op = document.createElement('option');

    //setar o valor para o OP
    op.value= n;      //propriedade value
    op.innerHTML = n; //mostrar na tela o valor

    //colocar o op como filho de select
    select.appendChild(op)
}

button.addEventListener("", () => {
    alert("ogly bogly")
})