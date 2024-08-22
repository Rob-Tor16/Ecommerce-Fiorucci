import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img className="logo" src="./images/fiorucci-logo-light.png" alt="Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/productos">Productos</Link>
              </li>
            </ul>
            <form className="d-flex gap-3">
              <Link to="/cart" className="btn btn-primary my-2 my-sm-0" type="submit">
                <i className="bi bi-bag-heart-fill"></i>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;