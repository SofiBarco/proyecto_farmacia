

let ProductosFarmacia = []


const productoSeleccionado = document.querySelector('#productoSeleccionado')

const btnAgregar = document.querySelectorAll('.buttonCpra')

const cardImg = document.querySelector('.cardImg')
const cardBody = document.querySelector('.card-body')
const cardName = document.querySelector('.card-name')
const cardPrecio = document.querySelector('.card-precio')

const searchBar = document.querySelector('#searchBar')
const searchButton = document.querySelector('#searchButton')
const cardProductos = document.querySelector('.cardProductos')
const btnQuitar = document.querySelector('.btnQuitar')
const productoAgregado = document.querySelector('.carrito')
const totalCarrito = document.querySelector ('.total')
const btnfinalizar = document.querySelector ('.btnfinalizar')

let carritoDeCompras = []

const renderizarDatosProductos = (e) => {
    const productoIdSeleccionado = e.target.closest('.buttonCpra').getAttribute('data-id')
    const productoElegido = ProductosFarmacia.find((producto) => producto.id == productoIdSeleccionado)
    if (localStorage.getItem('carritoDeCompras')) {
        carritoDeCompras = JSON.parse(localStorage.getItem('carritoDeCompras'))
    } else {
        carritoDeCompras = []
    } 
   
    carritoDeCompras.push(productoIdSeleccionado)
   
    localStorage.setItem('carritoDeCompras', JSON.stringify(carritoDeCompras))
        
    const todosLosProductosGuardado = JSON.parse(localStorage.getItem('carritoDeCompras'))
    console.log(todosLosProductosGuardado)

    const nuevoProducto = document.createElement('div')
    nuevoProducto.innerHTML = `
    <img class="cardImg" src="${productoElegido.img}" class="card-img-top" alt="${productoElegido.nombre}" style="width:80px;height: 80px;">
    <h5 class="card-name">${productoElegido.nombre}</h5>
    <p class="card-precio"> $ ${productoElegido.precio}</p>
   ` //<button class="btnQuitar btn-primary">Quitar del carrito</button> 
    
    nuevoProducto.className = 'cardProductos'
    cardProductos.append(nuevoProducto)

}

btnAgregar.forEach((button) => {
    button.addEventListener('click', renderizarDatosProductos)
    
})

function renderizarCarrito() {
    // Vaciamos todo el html
    productoAgregado.innerHTML = ''

    function suma(a, b) {
        return parseInt (a) + parseInt (b);
      }
         
      const sumaTotal = carritoDeCompras.reduce(suma);
      
        const miCarrito= document.createElement('div')
        miCarrito.className = 'carrito'
        miCarrito.innerHTML = `
        <h1 class="Card-name">Total</h1>
            <p class="card-name"> $ ${parseInt(sumaTotal)}</p>
            <button class="btnfinalizar btn-primary">Finalizar Compra</button>
            <button class="btnQuitar btn-primary">Vaciar carrito</button>
        `
    
    productoAgregado.appendChild(miCarrito)
   
}

btnAgregar.forEach((button) => {
    button.addEventListener('click', renderizarCarrito )
    
})

const vaciarCarrito = () => {
    carritoDeCompras = []
    guardarEnStorage('carritoDeCompras', carritoDeCompras)
    nuevoProducto.innerHTML = ''
}


btnfinalizar.addEventListener('click', () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tu compra ha finalizado!',
        showConfirmButton: false,
        timer: 1500
      })
   }
   )
     

const getTodoslosproductos = async () => {
    const response = await fetch('../jsondata/productos.json')
    const data = await response.json()
    ProductosFarmacia = data
}

getTodoslosproductos()


const buscarProducto = () => {
    const query = searchBar.value.toLowerCase()
    const arrayResultados = ProductosFarmacia.filter((producto) => producto.nombre.toLowerCase().includes(query))
    getTodoslosproductos(arrayResultados)
}

btnQuitar.addEventListener('click', vaciarCarrito)

searchButton.addEventListener('click', buscarProducto)
searchBar.addEventListener('input', buscarProducto)

