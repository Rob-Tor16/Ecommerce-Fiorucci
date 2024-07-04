import React from 'react'
import { createContext, useEffect,useState } from 'react'
import {toast, Bounce} from "react-toastify";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {


    const [carrito, setCarrito] = useState(carritoInicial)

    const agregarAlCarrito = (item,cantidad) => {
        const ItemAgregado = {...item, cantidad};

        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.fins((producto) => producto.id === productoAgregado.id);

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
        } else {
            nuevoCarrito.push(itemAgregado);
            toast.success(`Producto agregado al carrito`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });   
        }
        setCarrito(nuevoCarrito);
    }

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const precioTotal = () => {
        return carrito.reduce ((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }

    const limpiarCarrito =() => {
        setCarrito([]);
    }

    const borrarItem = (itemId) => {
        setCarrito((prevCart) => prevCart.filter((prod) => prod.id !== itemId))
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    })
        
    }
  return (
    <CartContext.Provider value={{
        carrito,
        agregarAlCarrito,
        cantidadEnCarrito,
        precioTotal,
        limpiarCarrito,
        borrarItem
    }}>

    </CartContext.Provider>
  )


export default CartContext