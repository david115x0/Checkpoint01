export default function inputCounter() {
    let counter = document.getElementById("counter");
    let counterCircle = document.querySelector('#counter-container span')

    counter.innerText = `${150 - descricao.value.length}`;
    if (descricao.value.length >= 140) {
        counter.style.color = 'var(--tertiary-color)';
        counterCircle.style.color = 'var(--tertiary-color)';
    } else {
        counter.style.color = '';
        counterCircle.style.border = 'solid 1px var(--tertiary-color);';
    }
};