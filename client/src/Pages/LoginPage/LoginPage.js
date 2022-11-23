import React, { Component } from "react";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correo: "",
      contrasena: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { correo, contrasena } = this.state;
    console.log(correo, contrasena);
    fetch("http://localhost:3030/api/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        correo,
        contrasena,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
        }
      });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Ingresar</h3>

        <div className="mb-3">
          <label>Correo</label>
          <input
            type="email"
            className="form-control"
            placeholder="Ingrese correo"
            onChange={(e) => this.setState({ correo: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingrese contraseña"
            onChange={(e) => this.setState({ contrasena: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
                Recuerdame
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" href="/productos" className="btn btn-primary" >
          <a type='button' className="btn btn-primary" href="/productos">Ingresar</a>
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="/registro">Registrarme</a>
        </p>
      </form>
    );
  }
}