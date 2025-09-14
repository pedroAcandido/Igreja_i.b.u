// Seleciona o botão do menu e a lista de navegação
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

// Adiciona um evento de clique ao botão
menuToggle.addEventListener('click', () => {
    // Adiciona ou remove a classe 'active' da lista de navegação
    // O CSS se encarrega de mostrar ou esconder o menu com base nessa classe
    navUl.classList.toggle('active');
});