import React, { useState } from 'react';
import Item from './Item';
import { Link } from "react-router-dom";
import Loading from './Loading';

const ItemList = ({ productos, titulo }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16; 


  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productos.slice(indexOfFirstProduct, indexOfLastProduct);


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {productos.length === 0 ? (
        <Loading />
      ) : (
        <div className="container">
          <h2 className="main title text-white">{titulo}</h2>
          <div className="container d-flex flex-wrap">
            <div className="row rounded">
            <ul className="nav justify-content-center gap-5">
                      <li className="nav-item">
                          <Link to="/productos" className="btn-primary">Todos</Link>
                      </li>
                      <li className="nav-item">
                          <Link  to="/productos/Procesadores"  className="btn-primary">Hombres</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/productos/Placas de video"  className="btn-primary">Mujeres</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/productos/Placas de video"  className="btn-primary">Niños</Link>
                      </li>
              </ul>
              {currentProducts.map((prod) => <Item producto={prod} key={prod.id} />)}
              <div className='d-flex justify-content-center'>
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <button className="page-link" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                      Previous
                    </button>
                  </li>
                  {Array.from({ length: Math.ceil(productos.length / productsPerPage) }, (_, i) => i + 1).map((pageNumber) => (
                    <li key={pageNumber} className={`page-item ${pageNumber === currentPage ? 'active' : ''}`}>
                      <button className="page-link" onClick={() => paginate(pageNumber)}>
                        {pageNumber}
                      </button>
                    </li>
                  ))}
                  <li className="page-item">
                    <button className="page-link" onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(productos.length / productsPerPage)}>
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
              </div>
             
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemList;