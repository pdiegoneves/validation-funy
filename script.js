const name = document.getElementById('name')
const email = document.getElementById('email')
const button = document.getElementById('button')
const form = document.getElementById('form')


function check() {
    if(name.value != '' && email.value != '') {
        button.classList.remove('invalid')
    } else {
        button.classList.add('invalid')
        mudarDeLugar()
    }
}

function mudarDeLugar() {
let numeroAleatorio = Math.floor(Math.random() * form.clientWidth) - button.clientWidth
    if (numeroAleatorio > 0) {
        button.style.marginLeft = numeroAleatorio + 'px'
    } else {
        button.style.marginLeft = 0 + 'px'
    }
}