document
    .querySelectorAll('a[href^="#"]')
    .forEach(a => a.addEventListener(
        "click", function(e) {
        const target = document.querySelector(e.target.getAttribute("href"))
        const offset = document.querySelector('nav').offsetHeight
        
        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: 'smooth'
        });
        
        e.preventDefault()
    })
);
