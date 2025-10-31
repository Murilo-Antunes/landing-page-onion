document.addEventListener('DOMContentLoaded', () => {

    const menu = document.querySelector('.img-hamburger')

        function menuAction () {
            menu.classList.toggle ('show')
        }
    
        menu.addEventListener('click', menuAction)
    })