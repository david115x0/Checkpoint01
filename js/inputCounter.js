// exportamos para app.js, para que o index identifique esse script
export default function inputCounter() {
    let counter = document.getElementById("counter"); // selecionamos id 
    let counterCircle = document.getElementById("counter")// selecionamos a divisoria

    counter.innerText = `${150 - descricao.value.length}`;// inserimos na variavel counter, uma subtraçao de 150 menos o valor de descrição que foi convertidade com o value.
    if (descricao.value.length >= 140) { // inserimos uma condiconal, que "contará" os caracteres;
        counter.style.color = 'var(--tertiary-color)';// modificamos a cor do numero 
        counterCircle.style.borderColor = 'var(--tertiary-color)';// modificamos a cor da borda para vermelho
    } else {
        counter.style.color = 'green';// modificamos a cor do numero 
        counterCircle.style.borderColor = 'yellow';// modificamos a cor da borda para amarelo
    }
};