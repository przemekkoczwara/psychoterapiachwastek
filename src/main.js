import './styles/main.scss';

const logo = document.getElementById('toggle-menu');
const menu = document.querySelector('.menu');

if (logo && menu) {
  logo.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('menu-active');
  });
}
