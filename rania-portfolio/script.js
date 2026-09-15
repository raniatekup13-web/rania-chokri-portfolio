const menu = document.getElementById('menu');
const navbar = document.querySelector('.navbar');
menu.addEventListener('click', () => navbar.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => navbar.classList.remove('open')));
const observer = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
