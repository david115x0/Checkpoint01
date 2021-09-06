export default function removeCard() {
    let removeButton = document.querySelectorAll('.remove-btn');// selecionamos a classe de todos os botões de remoção
    let card = document.querySelectorAll('.card');//selecionamos todas as classes de card
    for (let i = 0; i < card.length; i++) { //
        removeButton[i].addEventListener('click', () => { 
            card[i].style.opacity = 0; // aplicará um css que deixará transparente
            card[i].style.transform = 'rotate(-20deg) translate(-10rem, -10rem)'; // aplicará um css que movimentará o card com a transparência, para simular uma exclusão
            setTimeout(()=>{ // a função setTimeout esperará que toda essa animação seja concluida, e depois de meio segundo remove o card.
                card[i].remove();// remove() method do javascript.
            }, 500); // <-- meio segundo
        });
    };
};

removeCard();// chamamos a função