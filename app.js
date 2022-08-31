

let ProductosFarmacia = []


const productoSeleccionado = document.querySelector('#productoSeleccionado')

const btnAgregar = document.querySelectorAll('.buttonCpra')

const cardImg = document.querySelector('.cardImg')
const cardBody = document.querySelector('.card-body')
const cardName = document.querySelector('.card-name')
const cardPrecio = document.querySelector('.card-precio')

const searchBar = document.querySelector('#searchBar')
const searchButton = document.querySelector('#searchButton')

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

    cardImg.setAttribute('src', productoElegido.img)
    cardName.textContent = productoElegido.nombre
    cardPrecio.textContent = `$ ${productoElegido.precio}`


}


btnAgregar.forEach((button) => {
    button.addEventListener('click', renderizarDatosProductos)
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










//const renderizarListaProductos = () => {
//     productoSeleccionado.forEach((ProductoFarmacia) => {
//        const botonCompra = document.createElement('button')
 //       botonCompra.innerHTML = `
//        <button class="buttonCpra" id="btn6"> Agregar al Carrito </button>
//        `
 //       productoSeleccionado.append(botonCompra)
 //   });
//
//    {/**/ }
//}











//renderizarListaProductos()




/*<img class="cardImg" src=" " class="card-img-top" alt="...">
    <div class="card-body">
          <h5 class="card-name">Producto seleccionado</h5>
          <p class="card-precio">Precio</p>
     <button class="buttonCpra btnQuitar btn-primary">Quitar del carrito</button> 
     </div>*/