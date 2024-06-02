import React from 'react';

const Accordion = () => {
  return (
    <div className="accordion p-2" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header " id="headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            <i className="bi bi-credit-card"></i>
            Métodos de Pago
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
          Aceptamos pagos en una o más cuotas con todas las tarjetas de crédito y todos los bancos. 

Importante: Las promociones bancarias no son aplicables a compras a través de Mercado Pago así como a Cuota Simple.

A la hora de realizar un pago, se encriptan de forma segura todos los datos. Para una mayor seguridad, no guardamos los datos de las tarjetas.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <i class="bi bi-truck"></i>
            Métodos de envío
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
          Realizamos envíos a todo el país. Trabajamos con TREGGO, ANDREANI  y OCA como transportes logísticos para dichos envíos. Además contamos con modalidad de retiro en tiendas de la marca y sucursales ANDREANI y OCA.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            <i className="bi bi-arrow-counterclockwise"></i>
            Políticas de cambios
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
          Para realizar un cambio de producto, la prenda debe estar en el mismo estado en el que fueron recibidas, sin uso y con el embalaje y etiquetas originales. Estas condiciones no aplican para cambios de ropa interior ya que las mismas no tienen cambio.
El plazo para solicitarlo es de hasta 30 días corridos desde recibida la prenda. 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;