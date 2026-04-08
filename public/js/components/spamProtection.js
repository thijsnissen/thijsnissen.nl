let value = ["thijs", "thijsnissen.nl"].join('@')
let mail = document.querySelector(".my-email")

mail.innerHTML = value
mail.setAttribute("href", "mailto:" + value)
