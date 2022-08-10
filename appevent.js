

let formulario = document.getElementsByClassName('contacto')[0]


const todosLosClientes = []

formulario.onsubmit = (e) => {
    e.preventDefault();

    let nombre = document.getElementById('nombre')
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    
    let cliente = {
        nombre : nombre.value,
        email : email.value,
        password : password.value
    }
    todosLosClientes.push(cliente) 
    vaciarForm()

    console.log (todosLosClientes)
}

const vaciarForm = () => {
    nombre.value = ' '
    email.value = ' '
    password.value = ' '
}
