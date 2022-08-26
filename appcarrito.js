let carritoDeCompras = []

const renderizarDatosProductos = (e) => {
    const productoIdSeleccionado = e.target.closest('.buttonCpra').getAttribute('data-id')
    const productoElegido = ProductosFarmacia.find((producto) => producto.id == productoIdSeleccionado)

    if(localStorage.getItem('carritoDeCompras')){
       
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


