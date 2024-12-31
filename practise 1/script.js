// const navLinks = document.querySelector('.nav-links')
// function onToggleMenu(e){
//     e.name = e.name === 'menu' ? 'close' : 'menu'
//     navLinks.classList.toggle('top-[10%]')
// }


const toggleMenu = document.querySelector('.toggle-menu');
const dropdown = document.querySelector('.dropdown-menu');

toggleMenu.addEventListener('click', () => {
    dropdown.classList.toggle('top-16');
});
