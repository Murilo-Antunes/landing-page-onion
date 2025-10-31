const menu = document.getElementById('#img-hamburger')

function menuAction () {
    menu.classList.toggle ('show')
}

menu.addEventListener('click', menuAction)