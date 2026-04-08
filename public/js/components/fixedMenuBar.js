window.onscroll = function() {
    const nav = document.querySelector('nav')
    const header = document.querySelector('header')
    const sticky = header.offsetHeight

    if (window.pageYOffset > sticky) {
        header.style.marginBottom = nav.offsetHeight;
        nav.classList.add("fixed");
    } else {
        nav.classList.remove("fixed");
        header.style.marginBottom = 0;
    }
}
