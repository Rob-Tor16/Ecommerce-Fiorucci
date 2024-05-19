import React, { useState } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import './ItemCount.css'

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar, mensaje }) => {
  const [agregadoAlCarrito, setAgregadoAlCarrito] = useState(false);

  const handleAgregarAlCarrito = () => {
    handleAgregar();
    setAgregadoAlCarrito(true);
  };

  return (
    <div className="row gap-3">
        <div className="btn-group w-50" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
            <label className="btn btn-outline-primary" htmlFor="btnradio1">S</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
            <label className="btn btn-outline-primary" htmlFor="btnradio2">M</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
            <label className="btn btn-outline-primary" htmlFor="btnradio3">L</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off" />
            <label className="btn btn-outline-primary" htmlFor="btnradio4">XL</label>
        </div>

        <div className='count '>
            <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button onClick={handleRestar} type="button" className="btn btn-primary w-50">-</button>
            <button className="button-cantidad text-dark">{cantidad}</button>
            <button onClick={handleSumar} type="button" className="btn btn-primary w-50">+</button>
            </div>
        </div>

        <div className='container-boton '>
            <button className="btn btn-primary" onClick={handleAgregarAlCarrito}>Agregar al carrito</button>
            {agregadoAlCarrito && (
                <Link to="/carrito" className="btn btn-succes d-flex justify-content-center" onClick={() => console.log("Terminar compra")}>Terminar compra</Link>
            )}
        </div>
    </div>
    
  );
};

export default ItemCount;