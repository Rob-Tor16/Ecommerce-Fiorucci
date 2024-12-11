import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from './cartItem'
import "./cart.css"

const Cart = () => {
  const { carrito, limpiarCarrito, precioTotal } = useContext(CartContext)

  if(carrito.length === 0){
    return (
      <div className='d-flex justify-content-center'>
        <div>
          <h2>No hay items en la cartera</h2>
        </div>
        <div>
          <Link className="btn btn-primary" to="/productos">
            <i className="bi bi-arrow-return-left"></i>Productos
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="contenedor-carrito d-flex">
                <div className="carrito d-flex flex-row">
                  <div>
                  <div className="carrito-titulo d-flex justify-content-center bg-black flex-column">
                        <div className="d-flex justify-content-center" ><h3 className="text-white">Cartera</h3></div>
                    </div>
                    
                
                {
                    carrito.map(producto => <CartItem key={producto.id} producto={producto}/>)
                }
                <div className="contenedor-resumen bg-white">
                    <h3 className="titulo text-primary">Resumen</h3>
                    <div className="acciones">
                        <h3 className="total text-primary"> ${precioTotal ()}</h3>
                        <div className="botones-carrito d-flex">
                          <div>
                          <Link type="button" className="btn btn-danger w-100" onClick={() => limpiarCarrito()}>Limpiar Cartera</Link>
                          </div>
                          <div> 
                          <Link type="button" to="/checkout" className="btn btn-success w-100" >Comprar</Link>
                          </div>
                          <div>
                            <Link type="button" className="btn btn-primary w-100" to="/productos">Seguir Agregando</Link>
                          </div>
                        </div>
                          
                          
                    </div>
                
               
                </div>
                  </div>
                    
                
            </div>
            
          </div>
  )
}

export default Cart