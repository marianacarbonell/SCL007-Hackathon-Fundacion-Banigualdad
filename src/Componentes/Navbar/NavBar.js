import React, { Component } from 'react';

class NavbarPag extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="../../App.js">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../Catalogo">Emprendedores</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../Formulario/formulario.js">Editar Perfil</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../../App.js">Cerrar Sesión</a>
      </li>
      <li class="nav-item dropdown">
      </li>
    </ul>
  </div>
</nav>
        );
    }

}
export default NavbarPag;