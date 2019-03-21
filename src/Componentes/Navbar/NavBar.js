import React, { Component } from 'react';
import './Navbar.css';

class NavbarPag extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
<nav className="navbar navbar-expand-lg navbar-light">
<div className="icon">
<img src="https://raw.githubusercontent.com/marianacarbonell/SCL007-Hackathon-Fundacion-Banigualdad/master/src/Componentes/Imagenes/VOLANTIN.png"/>
</div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="">
      <li className="">
        <a className="nav-link" href="../Catalogo/">Emprendedores <span className="sr-only">(current)</span></a>
      </li>
    </ul>
  </div>
</nav>
        );
    }

}
export default NavbarPag;