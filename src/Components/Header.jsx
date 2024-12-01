import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImagenUrl from '../assets/logo.png'

const Header = () => {
  // Estado para la cantidad de productos en el carrito
  const [cartCount, setCartCount] = useState(0);

  // Función para agregar un producto al carrito
  const addToCart = () => {
    setCartCount(cartCount + 1); // Aumenta el contador
  };

  return (
    <header className="bg-dark py-3">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <div className="logo">
          <a href="#" className="text-white h3 text-decoration-none">
            <img src={ImagenUrl} alt="Logo" className="img-fluid" style={{ maxHeight: '50px' }} />
          </a>
        </div>

        {/* Navegación */}
        <nav className="navbar navbar-expand-lg navbar-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/about">
                  Acerca de
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/services">
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/contact">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Buscador y Carrito */}
        <div className="d-flex align-items-center">
          <input
            type="text"
            className="form-control me-1"
            placeholder="Buscar..."
            style={{ maxWidth: "200px" }}
          />
          <button className="btn btn-info me-2">Buscar</button>

          <div className="cart d-flex align-items-center">
            <button
              className="btn btn-outline-light position-relative"
              onClick={addToCart}
            >
              <i className="fas fa-shopping-cart fa-lg"></i>
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
