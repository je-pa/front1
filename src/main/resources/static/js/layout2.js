const toggleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('nav');

toggleBtn.addEventListener('click',()=>{
    menu.classList.toggle('active');
})