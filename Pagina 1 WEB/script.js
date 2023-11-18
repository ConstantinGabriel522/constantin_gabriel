// Cache the dom

var button = document.getElementById("button")
var body = document.getElementById("body")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var img = document.getElementById("imagine")
var asteptari = document.getElementById("asteptari")
var an = document.getElementById("anNastere")

const d = new Date()
var year = d.getFullYear()

button.addEventListener("click", shift)
an.addEventListener("mouseover", displayAge)

function shift(){
    nume.innerHTML = "Functie: Senior WEB Developer"
    prenume.innerHTML = "Locul de munca: Gropeni"
    asteptari.innerHTML = "Experienta: Primii 4 ani de facultate pana in anul 2 sunt mai grei."
    img.src = "husky.jpg"
    body.style.backgroundColor = "lightblue"
    body.style.color = "green"
    body.style.fontFamily = "Nunito"
    img.style.opacity = "50%"
    img.style.border = "2px solid white"
}

function displayAge(){
    an.innerHTML = year - an.innerHTML
}

