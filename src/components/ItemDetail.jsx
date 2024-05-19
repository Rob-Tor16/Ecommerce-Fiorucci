import React from 'react'
import  {  useState } from 'react'
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {


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
            <div className=" col-md-5 p-5">
                <h2>
                    <span className='text-primary'>
                        ${item.precio}
                    </span>
                </h2>
                <h4>categoría: {item.categoria}</h4>

                <div className='gap-5'>
                    <ItemCount cantidad = {cantidad} handleSumar= {handleSumar} handleRestar= {handleRestar} handleAgregar= { ()=> { agregarAlCarrito( item, cantidad)}}/>
                </div>
                
                <ul className='lista'>
                    <li className='item'>
                        <i className="bi bi-check-circle-fill text-primary"></i>
                        <div>
                            <strong><span className='text-primary'>¡ULTIMAS UNIDADES!</span></strong>
                            <div> Solo para venta web</div>
                        </div>
                        
                    </li>
                    <li className='item'>
                        <i className="bi bi-check-circle-fill text-primary"></i>
                        <div>
                            <strong><span className='text-primary'>STOCK BAJO EN EL LOCAL</span></strong>
                            <div> Solo para venta presencial</div>
                        </div>
                        
                    </li>
                    <li className='item'>
                        <i className="bi bi-shop text-primary"></i>
                        <div>
                            <strong><span>RETIRO <span className='text-primary'>¡GRATIS!</span></span></strong>
                            <div>Arenales 2741</div>
                        </div>
                        
                    </li>
                    <li className='item'>
                        <i className="bi bi-truck text-primary"></i>
                        <div>
                            <strong><span className='text-primary'>ENVÍOS A TODO EL PAÍS </span></strong>
                            <div>Envío moto Mar del Plata llega mañana</div>
                        </div>
                    </li>
                    <li className='item'>
                        <i className="bi bi-shield-check text-primary "></i>
                        <div>
                            <strong><span className='text-primary'>GARANTÍA </span></strong>
                            <div>360 días</div>
                        </div>
                    </li>
                </ul>
            </div>  
        </div>      
    </div>
  )

}

export default ItemDetail