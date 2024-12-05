import { useState } from "react";
import styled from "styled-components";
import ImagenUrl from "../assets/logo.png"; // Asegúrate de tener tu logo aquí

const HeaderContainer = styled.header`
  background-color: #343a40;
  padding: 1rem 0;
  top: 0;
  z-index: 1000;
  position: sticky;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    max-height: 50px;
  }
`;

const Navbar = styled.nav`
  .navbar-nav {
    margin-left: auto;
  }

  .nav-link {
    color: white;
    margin-left: 1rem;
    font-weight: 500;
    transition: color 0.3s;

    &:hover {
      color: #007bff;
    }
  }
`;

const SearchAndCart = styled.div`
  display: flex;
  align-items: center;

  .form-control {
    max-width: 200px;
    margin-right: 1rem;
    border-radius: 25px;
  }

  .btn-dark {
    margin-right: 1rem;
    background-color: #0088ff;
    border-radius: 25px;
    padding: 0.5rem 1rem;
  }

  .cart {
    position: relative;

    .btn {
      background-color: transparent;
      border: 1px solid white;
      color: white;
      position: relative;
      padding: 0.5rem;
      border-radius: 50%;
      transition: background-color 0.3s;

      &:hover {
        background-color: #007bff;
        border-color: #007bff;
      }

      .badge {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%, -50%);
        background-color: #dc3545;
        color: white;
        font-size: 0.8rem;
        padding: 0.2rem 0.5rem;
        border-radius: 50%;
      }
    }
  }
`;

const Header = () => {
  const [cartCount, setCartCount] = useState(0); // Estado para el número de productos en el carrito

  // Función para agregar productos al carrito
  const addToCart = () => {
    setCartCount(cartCount + 1); // Incrementa el número de productos en el carrito
  };

  return (
    <HeaderContainer>
      <div className="container d-flex justify-content-between align-items-center">
        <Logo>
          <a href="#" className="text-white h3 text-decoration-none">
            <img src={ImagenUrl} alt="Logo" className="img-fluid" />
          </a>
        </Logo>

        <Navbar>
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
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
        </Navbar>

        <SearchAndCart>
          <input type="text" className="form-control" placeholder="Buscar..." />
          <button className="btn btn-dark">Buscar</button>

          <div className="cart">
            <button
              className="btn btn-outline-light position-relative"
              onClick={addToCart}
            >
              <i className="fas fa-shopping-cart fa-lg"></i>
              {cartCount > 0 && (
                <span className="badge rounded-pill">{cartCount}</span> // Muestra la cantidad de productos en el carrito
              )}
            </button>
          </div>
        </SearchAndCart>
      </div>
    </HeaderContainer>
  );
};

export default Header;
