export function darkMode() {
    let toggle = document.querySelector('label[for="toggle"]');// selecionamos a classe label e o for toggle
    toggle.style.transform = 'rotate(720deg)'; // aplicamos um transform "animação" que fará girar o icone.
    toggle.innerText = '☼';

    //Adicionamos atributos de cores na pagina, quando o darkmode for chamado;
    document.documentElement.setAttribute('style', 
        `--background-color: var(--primary-color);
        --tertiary-color: #e45858;`);
    // modificamos as cores do label e span
    document.querySelector('label').style.color = '#ccc';
    document.querySelector('span').style.color = '#ffffff50';

    //irá aplicar um filtro de coloração em todos as classes nav-icons;
    document.querySelectorAll('.nav-icons').forEach(function(item) {
        item.style.filter = 'invert(94%) sepia(3%) saturate(23%) hue-rotate(12deg) brightness(89%) contrast(87%)';
    });
    //irá aplicar o color no h1;
    document.querySelectorAll('h1').forEach(function(item) {
        item.style.color = '#ccc';
    });
    //irá aplicar o color em todas as tags P;
    document.querySelectorAll('p').forEach(function(item) {
        item.style.color = '#ccc';
    });
};

// usamos a mesma logica no light-mode 
export function lightMode() {
    let toggle = document.querySelector('label[for="toggle"]');
    toggle.style.transform = '';
    toggle.innerHTML = '&#9790;';

    document.documentElement.setAttribute('style', '');

    document.querySelector('label').style.color = '';
    document.querySelector('span').style.color = '';

    document.querySelectorAll('.nav-icons').forEach(function(item) {
        item.style.filter = '';
    });
    document.querySelectorAll('h1').forEach(function(item) {
        item.style.color = '';
    });
    document.querySelectorAll('p').forEach(function(item) {
        item.style.color = '';
    });
};

let toggle = document.querySelector('#toggle');

// aplicamos um evento de mudança que checará  se estamos em dark-mode ou light-mode;
toggle.addEventListener('change', function() {
    if (toggle.checked) {
        darkMode();
    } else {
        lightMode();
    };
});
