import React from 'react';
import CardWidget from '../CardWidget/CardWidget';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Veterinaria</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Accesorios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Consultas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Raciones</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <CardWidget />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
