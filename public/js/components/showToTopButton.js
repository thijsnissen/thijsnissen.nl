const button = document.querySelector('.up')

window.addEventListener("scroll", function () {
    if (window.scrollY > document.querySelector('header').offsetHeight) {
        button.classList.add('fixed')
    } else {
        button.classList.remove('fixed')
    }
})
