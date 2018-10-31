function quitarDiv() {
    let inicio = document.getElementById('inicio')
    let portfolio = document.getElementById('portfolio')
    let contacto = document.getElementById('contacto')
    inicio.className ='invisible' 
    portfolio.className ='invisible'
    contacto.className ='invisible'
}
function verInicio(){
    quitarDiv()
    let inicio = document.getElementById('inicio')
    inicio.className +='visible'
}
function verPortfolio(){
    quitarDiv()
    let portfolio = document.getElementById('portfolio')
    portfolio.className +='visible'
}
function verContacto(){
    quitarDiv()
    let contacto = document.getElementById('contacto')
    contacto.className +='visible'
}