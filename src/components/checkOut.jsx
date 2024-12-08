import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig';
import Swal from 'sweetalert2';
import './checkOut.css';


const CheckOut = () => {
    const [pedidoId, setPedidoId] = useState("");
    const { carrito, limpiarCarrito, precioTotal } = useContext(CartContext);
    const { register, handleSubmit } = useForm();

    const comprar = async (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        };

        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");

        try {
            const docRef = await addDoc(pedidosRef, pedido);
            setPedidoId(docRef.id);
            limpiarCarrito();
            Swal.fire({
                title: '¡Compra realizada!',
                text: '¡Muchas gracias por tu compra!',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });

           Stripe
            
            const { error } = await stripe.redirectToCheckout({
                lineItems: [{ price: 'precio_del_producto', quantity: 1 }],
                mode: 'payment',
                successUrl: 'URL_de_retorno_de_exito',
                cancelUrl: 'URL_de_retorno_de_cancelacion',
            });

            if (error) {
                console.error("Error al redirigir a la página de pago de Stripe:", error);

            }
        } catch (error) {
            console.error("Error al agregar el pedido a Firebase:", error);

        }
    };

    return (
        <div className="d-flex justify-content-center m-8 p-5 w-100 ">
            <div className="form-checkout bg-grey   m-3 card-size rounded p-5 my-4 bg-white border">
                <form className="formulario" onSubmit={handleSubmit(comprar)}>
                    <div className='w-50'>
                        <h2 className="fs-3 fw-bold text-primary text-center ">Orden de compra</h2>
                    </div>
                    <div className="d-flex justify-content-center">
                        <img className='w-50' src="/images/undraw_order_confirmed_re_g0if.svg"/>
                    </div>
                    
                    <div className="mb-3 m-2">
                        <label className="form-label m-0">Nombre:</label>
                        <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} className="form-control" />
                    </div>
                    <div className="mb-3 m-2">
                        <label htmlFor="exampleInputEmail1" className="form-label m-0">Correo:</label>
                        <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 m-2">
                        <label htmlFor="exampleInputEmail1" className="form-label m-0">Telefono:</label>
                        <input type="phone" placeholder="Ingresá tu numero de telefono" {...register("telefono")} className="form-control" />
                    </div>
                    <div className="mb-3 m-2">
                        <div className="row d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary">Crear Orden</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;