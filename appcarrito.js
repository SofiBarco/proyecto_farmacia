const todosLosProductosGuardado = JSON.parse(localStorage.getItem('carritoDeCompras'))
console.log(todosLosProductosGuardado)

    cardImg.setAttribute('src', productoElegido.img)
    cardName.textContent = productoElegido.nombre
    cardPrecio.textContent = `$ ${productoElegido.precio}`
    