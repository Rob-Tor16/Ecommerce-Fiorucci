import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from './cartItem'

const Carrito = () => {

  const { carrito, limpiarCarrito, precioTotal } = useContext(CartContext)

  if(carrito.length == 0){
    return(
      <div className='contenedor-nocarrito '>
        <div>
          <h2 className='text-white'>No hay items en el carrito</h2>
        </div>
        <div>
        <Link className="btn btn-primary" to ="/productos"><i className="bi bi-arrow-return-left"></i>Productos</Link>
        </div>
       
      </div>
    )
  }


  return (

    <div className="contenedor-carrito">
                <div className="carrito">
                    <div className="carrito-titulo d-flex justify-content-center ">
                        <h3 className="text-white">Carrito</h3>
                    </div>
                
                {
                    carrito.map(producto => <CartItem key={producto.id} producto={producto}/>)
                }
                <div className="contenedor-resumen bg-white">
                    <h3 className="titulo text-primary">Resumen</h3>
                    <div className="acciones">
                        <div className="total text-primary">Total: ${precioTotal ()}</div>
                        <div className="botones-carrito d-flex">
                          <div>
                          <Link type="button" className="button w-100" onClick={() => limpiarCarrito()}>Limpiar Carrito</Link>
                          </div>
                          <div> 
                          <Link type="btn btn-primary" to="/checkout" className="button-comprar w-100" >Comprar</Link>
                          </div>
                          <div>
                            <Link type="button" className="button-eliminar w-100" to="/productos">Seguir Comprando</Link>
                          </div>
                        </div>
                          
                          
                    </div>
                
               
                </div>
            
            </div>
          </div>
  )
}

export default Carrito