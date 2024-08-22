import React from 'react'
import  { useContext, useState } from 'react'
import ItemCount from './ItemCount';
import Acordeon from "./Acordeon";
import { CartContext } from '../context/cartContext';

const ItemDetail = ({item}) => {

    const {carrito, agregarAlCarrito} = useContext(CartContext);
    console.log(carrito);

    const [cantidad, setCantidad] = useState(1);
    

    const handleRestar = () =>{
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

  return (
    <div className="container">
        <div className="row d-flex pt-5 pb-5 shadow p-3 mb-3 m-3 bg-white rounded">
            <div className="col-md-5 offset-md-2">
                <h2>{item.titulo}</h2>
                <img className="img-fluid" src={item.imagen} alt={item.titulo}/>
            </div>
            <div className=" col-md-5 p-5 ">
                <h2>
                    <span className='text-primary'>
                        ${item.precio}
                    </span>
                </h2>
                <div>categoría: {item.categoria}</div>
                <div className="accordion p-2" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Detalles de la prenda:
                    </button>
                    </h2>
                    <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                    >
                    <div className="accordion-body">
                        {item.descripcion}
                    </div>
                    </div>
               
                </div>
                </div>
                
                <div className='gap-5'>
                    <ItemCount cantidad = {cantidad} handleSumar= {handleSumar} handleRestar= {handleRestar} handleAgregar= { ()=> { agregarAlCarrito( item, cantidad)}}/>
                </div>
                
                <Acordeon/>
            </div>  
        </div>      
    </div>
  )

}

export default ItemDetail