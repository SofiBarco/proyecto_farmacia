

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
    <button class="btnQuitar btn-primary">Quitar del carrito</button> 
    `
    nuevoProducto.className = 'cardProductos'
    cardProductos.append(nuevoProducto)

    
    const sumarTotal = carritoDeCompras.reduce ( (acc, precioProducto) =>{
      return acc = acc + precioProducto 
    },)  

    console.log(sumarTotal)
}




btnAgregar.forEach((button) => {
    button.addEventListener('click', renderizarDatosProductos) 
    //button.addEventListener('clik', )
    
})

    

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


searchButton.addEventListener('click', buscarProducto)
searchBar.addEventListener('input', buscarProducto)





/*
<img class="cardImg" src=" " class="card-img-top" alt="..." style="width:80px;height: 80px;">
    <h5 class="card-name">Producto seleccionado</h5>
    <p class="card-precio">Precio</p>
    <button class="btnQuitar btn-primary">Quitar del carrito</button> 
        
*/