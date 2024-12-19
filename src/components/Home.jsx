import React from 'react';
import { useAuth } from '../context/authContext';

const Home = () => {
  const { currentUser } = useAuth();

  // Verificar si currentUser es nulo
  const userName = currentUser?.displayName || currentUser?.email || "Invitado";

  return (
    <div>
      <section className="relative d-flex">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
        
        <div className="container py-5 d-flex">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 text-center ltr:sm:text-left rtl:sm:text-right d-flex justify-content-center align-items-center flex-column">
              <h1 className="display-4 mb-4">
                Bienvenido {userName}, a{' '}
                <strong className="text-rose-700">Fiorucci</strong>
              </h1>

              <p className="lead mb-4">
                En Fiorucci , nos apasiona la moda y queremos compartir esa pasión contigo. Nuestra tienda en línea ofrece una amplia selección de ropa de última tendencia para hombres, mujeres y niños.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img className="fondo" src="./images/undraw_web_shopping_re_owap.png" alt="Fondo de compras" />
        </div>
      </section>
    </div>
  );
};

export default Home;
