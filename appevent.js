

let formulario = document.getElementsByClassName('contacto')[0]


let todosLosClientes
if(localStorage.getItem('todosLosClientes')){
    todosLosClientes = JSON.parse(localStorage.getItem('todosLosClientes'))
} else {
    todosLosClientes = []
}


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
    localStorage.setItem('todosLosClientes', JSON.stringify(todosLosClientes))
    vaciarForm()
    
console.log(todosLosClientes)


}

const todosLosClientesGuardado = JSON.parse(localStorage.getItem('todosLosClientes'))
console.log(todosLosClientesGuardado)

const vaciarForm = () => {
    nombre.value = ' '
    email.value = ' '
    password.value = ' '
}

