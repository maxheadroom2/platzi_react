import React from 'react';
// imagenes
import logo from '../images/logo.svg'
// componentes
// Estilos
import "./styles/Navbar.css"

class NavBar extends React.Component {
  render() {
    return(
      <div className="Navbar">
      <div className="container-fluid"></div>
        <a className="Navbar__brand" href="/" >
          <img
            className="NavBar__brand-logo"
            src={logo}
            alt="Logo"
            />
          <span className="font-weight-light">Platzi</span>
          <span className="font-weight-bold">Conf</span>
        </a>
      </div>
    )
  }
}

export default NavBar;
