import React, { Component } from "react";
import { redirect } from "react-router-dom";



export default class registro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      correo: "",
      telefono: "",
      direccion: "",
      contrasena: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {

    e.preventDefault();
    const { nombre, correo, telefono, direccion, contrasena } = this.state;
    console.log(nombre, correo, telefono, direccion, contrasena);
    fetch("http://localhost:3030/api/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        nombre,
        correo,
        telefono,
        direccion,
        contrasena,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
      }).catch(err => console.log(err));

  
  }



  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <hr/>
        <h3>LLENA TUS DATOS PARA CONTINUAR CON LA COMPRA!</h3>

        <div className="mb-3">
          <label>Nombre de cliente</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            onChange={(e) => this.setState({ nombre: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Correo de contacto</label>
          <input
            type="email"
            className="form-control"
            placeholder="Ingrese un correo"
            onChange={(e) => this.setState({ correo: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Teléfono de contacto</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese un teléfono"
            onChange={(e) => this.setState({ telefono: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Direccion de entrega</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese la dirección de envío"
            onChange={(e) => this.setState({ direccion: e.target.value })}
          />
        </div>

        <div className="d-grid">
          <input type="submit"></input>
        </div>
      </form>
    </div>
    );
  }
}

