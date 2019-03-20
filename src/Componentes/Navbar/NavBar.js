import React, { Component } from 'react';

class NavbarPag extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
<nav className="navbar navbar-expand-lg">
<i class="material-icons">Home</i>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="../../App.js">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="../Catalogo">Emprendedores</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="../Formulario/formulario.js">Editar Perfil</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="../../App.js">Cerrar Sesión</a>
      </li>
      <li className="nav-item dropdown">
      </li>
    </ul>
  </div>
</nav>
        );
    }

}
export default NavbarPag;