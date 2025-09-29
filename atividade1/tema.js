const botaoTrocaTema = document.getElementById('trocaTema');
const body = document.body;
const navbar = document.querySelector('.navbar');

const temaSalvo = localStorage.getItem('tema');

if(temaSalvo == 'escuro'){
    body.classList.add('dark-mode');
    navbar.classList.remove('navbar-light', 'bg-light');
    navbar.classList.add('navbar-dark', 'bg-dark');
    botaoTrocaTema.querySelector('i').classList.replace('bi-sun-fill', 'bi-moon-fill');
} else {
    navbar.classList.remove('navbar-dark', 'bg-dark');
    navbar.classList.add('navbar-light', 'bg-light');
    body.classList.add('light-mode');
    botaoTrocaTema.querySelector('i').classList.replace('bi-moon-fill', 'bi-sun-fill');
}

botaoTrocaTema.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    if (body.classList.contains('dark-mode')) {
        navbar.classList.remove('navbar-light', 'bg-light');
        navbar.classList.add('navbar-dark', 'bg-dark');
        localStorage.setItem('tema', 'escuro');
        botaoTrocaTema.querySelector('i').classList.replace('bi-sun-fill', 'bi-moon-fill');
    } else {
        navbar.classList.remove('navbar-dark', 'bg-dark');
        navbar.classList.add('navbar-light', 'bg-light');
        localStorage.setItem('tema', 'claro');
        botaoTrocaTema.querySelector('i').classList.replace('bi-moon-fill', 'bi-sun-fill');
    }
});