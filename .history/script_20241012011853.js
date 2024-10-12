const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

btn.addEventListener('click', () => { 
    menu.classList.toggle('hidden')
    btn.classList.toggle('active')  // toggles the active class on the button to visually indicate the menu is open
})