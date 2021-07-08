let burger = document.querySelector('.header-top-hidden__burger');
let menu = document.querySelector('.header-top-content');
burger.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});