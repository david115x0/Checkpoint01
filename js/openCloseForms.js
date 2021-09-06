// abrir e fechar formulário de adicionar card
export function openForm(){
    //selecionamos o article do adicionar novo bug, aplicamos um evento de click, que abrira nosso form modal
    document.getElementById('btn-open-form').addEventListener("click", () => {
        document.getElementById('form-modal').style.display = "flex";
    });
};
// selecionamos o id do botao cancelar e aplicamos um evento, que escondera o modal com o display none;
export function closeForm(){
    document.getElementById('btn-close-form').addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById('form-modal').style.display = "none";
    });
};


// abrir e fechar login 

//selecionamos a div de login
export let openLogin = () => {
    const modal = document.getElementById('login-modal-container');
    modal.classList.add('mostrar');// adicionamos o css .modal
};

export let closeLogin = () => {
    const modal = document.getElementById('login-modal-container');
    modal.classList.remove('mostrar');// remove o css de .login-modal.mostrar
};