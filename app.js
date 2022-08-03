
let carritoDeCompras = []

class ProductoFarmacia {

    constructor (id, nombre, precio) {

        this.id = id
        this.nombre = nombre
        this.precio = precio 
    }
}

const producto1 = new ProductoFarmacia(1020, 'Mascaras', 500)
const producto2 = new ProductoFarmacia(1021, ' Serum' , 1600)
const producto3 = new ProductoFarmacia(1022, ' VitaminaC' , 1500)
const producto4 = new ProductoFarmacia(1023, ' BbCream' , 1800)
const producto5 = new ProductoFarmacia(1024, ' GelDeSeda' , 1200)
const producto6 = new ProductoFarmacia(1025, ' GelDespigmentante' , 1000)

const ProductosFarmacia = [producto1, producto2, producto3, producto4, producto5, producto6]

const eleccionProducto = (productoSeleccionado) => {

        const productoElegido = {
            id: productoSeleccionado.id,
            nombre: productoSeleccionado.nombre,
            cantidad: 1,
            precio: productoSeleccionado.precio,
        }

        productoElegido.cantidad = Number(prompt('Que cantidad desea agregar al carrito?'))

        return productoElegido
}


const seleccionProducto = () => {
            const eleccionCliente = prompt('Por favor seleccione los productos que desee agregar al carrito: Mascaras, Serum, VitaminaC, Bbcream, Geldeseda, Geldespigmentante').toLowerCase()

            switch (eleccionCliente)
    {
        case 'mascaras':
            console.log('Elegiste Mascaras')
            carritoDeCompras.push(eleccionProducto(producto1))            
        break
        case 'serum':
            console.log('Elegiste Serum')
            carritoDeCompras.push(eleccionProducto(producto2))             
        break
        case 'vitaminac':
            console.log('Elegiste VitaminaC')
            carritoDeCompras.push(eleccionProducto(producto3))             
        break
        case 'bbcream':
           console.log('Elegiste Bbcream')
           carritoDeCompras.push(eleccionProducto(producto4))             
        break
        case 'geldeseda':
            console.log('Elegiste Geldeseda')
            carritoDeCompras.push(eleccionProducto(producto5))             
        break
        case 'geldespigmentante':
           console.log('Elegiste Geldespigmentante')
           carritoDeCompras.push(eleccionProducto(producto6))             
        break
       
        default:
            console.log ('El producto elegido no se encuentra en stock, ingrese otro por favor')
        break
    }

    if (confirm('Usted desea seguir agregando productos al carrito?')) {
        seleccionProducto()
    }
}


const sumarTotal = () => {
    let sumaTotal = 0
    for (const producto of carritoDeCompras) {

        sumaTotal += producto.precio * producto.cantidad
    }

    return sumaTotal
}

seleccionProducto ()

alert ('Gracias por su compra, el total es: $' + sumarTotal())
console.log ('Gracias por su compra, el total es: $' + sumarTotal())