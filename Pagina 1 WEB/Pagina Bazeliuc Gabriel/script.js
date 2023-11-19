// cache to the dom
var button = document.getElementById("button")
var body = document.getElementById("body")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var img = document.getElementById("imagine")
var asteptari = document.getElementById("asteptari")
var an = document.getElementById("anNastere")
const d = new Date()
var year = d.getFullYear()
// Add event
button.addEventListener("click", altaviata)

// alt event
an.addEventListener("mouseover", displayage)

function altaviata()
{
    nume.innerHTML = "Functie: Inginer"
    prenume.innerHTML = "Locul de munca: Undeva"
    asteptari.innerHTML = "Astept lucruri mari<ol><li>Intern</li><li>Extern</li><li>Diferite Proiecte</li></ol>"
    img.src = "imagini/OIP.jpg"
    body.style.backgroundColor = "#2f54d0"
    body.style.color ="lime"

    img.style.opacity ="84%"
    img.style.height ="300px"
    img.style.width = "350px"
    img.style.borderWidth = "20px"
}
function displayage()
{
    an.innerHTML = year - an.innerHTML
}
