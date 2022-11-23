import React, {Component} from "react";

class AdminClientsView extends Component{
    constructor(props){
        super(props);
        this.state = {
            nombre: "",
            correo: "",
            telefono: "",
            direccion: "",
            mensaje: false,
            allClients: [],
            _id: "",
        }
        this.enviarCliente= this.enviarCliente.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.tiempoMensaje = null;
        this.cerrarMensaje = this.cerrarMensaje.bind(this);
        this.state = {allClients: []};
    }

    

    componentDidMount(){
        this.obtenerClientes();
    }

    enviarCliente(e){
        e.preventDefault();
        if(this.state._id){
            fetch('http://localhost:3030/api/clients/details/' + this.state._id,{
                method: 'PUT',
                crossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify(this.state)
            })
            .then(res => res.json())
            .then(data => {
                this.setState({mensaje: true, nombre:'',correo:'',telefono:'',direccion:''});
                this.tiempoMensaje = setInterval(this.cerrarMensaje, 2000);
                console.log(data);
            })
        }else{
        console.log(this.state);
        fetch('http://localhost:3030/api/register',{
            method: 'POST',
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(data => {
            this.setState({mensaje: true, nombre:'',correo:'',telefono:'',direccion:''});
            this.tiempoMensaje = setInterval(this.cerrarMensaje, 2000);
            console.log(data);
        })
        .catch(err => console.log(err));
    }
    }

    handleChange(e){
        const{name, value} = e.target
        this.setState({
            [name]: value,
        });
    }

    cerrarMensaje(){
        clearInterval(this.tiempoMensaje);
        this.setState({mensaje: false});
    }

    obtenerClientes(){
        fetch('http://localhost:3030/api/clients')
        .then(res => res.json())
        .then(data => this.setState({allClients: data}))
        .catch(err => console.log(err));
    }

    editarCliente(id){
        fetch('http://localhost:3030/api/clients/details/' + id)
        .then(res => res.json())
        .then(data => {
            this.setState({
                nombre: data.nombre,
                correo: data.correo,
                telefono: data.telefono,
                direccion: data.direccion,
                _id: data._id
            });
        })

    }

    eliminarCliente(id){
        fetch('http://localhost:3030/api/clients/details/' + id, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'Application/json',
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.obtenerClientes();
        })
    }

    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Agregar Cliente</h5>
                                    <form onSubmit={this.enviarCliente}>
                                        <div className="row">
                                            <div className="form-group col-12">
                                                <input type="text" name="nombre" className="form-control" placeholder="Nombre Cliente" value={this.state.nombre} onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="form-group col-12">
                                                <input type="text" name="correo" className="form-control" placeholder="Correo Cliente" value={this.state.correo} onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="form-group col-12">
                                                <input type="text" name="telefono" className="form-control" placeholder="Telefono Cliente" value={this.state.telefono} onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="form-group col-12">
                                                <input type="text" name="direccion" className="form-control" placeholder="Direccion Cliente" value={this.state.direccion} onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="form-group col-3">
                                                <button type="submit" className="btn btn-primary">Enviar</button>
                                            </div>
                                            {this.state.mensaje? (
                                                <div className="form-group col-8">
                                                    <div className="alert alert-success" role="alert">
                                                        Cliente Guardado
                                                    </div>
                                                </div>
                                            ):''
                                            }
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    <div className="col-8">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Correo</th>
                                    <th>Telefono</th>
                                    <th>Direccion</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.allClients.map(cliente => {
                                        return(
                                            <tr key={cliente._id}>
                                                <td>{cliente.nombre}</td>
                                                <td>{cliente.correo}</td>
                                                <td>{cliente.telefono}</td>
                                                <td>{cliente.direccion}</td>
                                                <td>
                                                    <button className="btn btn-primary" onClick={() => this.editarCliente(cliente._id)}>
                                                        <i className="material-icons">create</i>
                                                    </button>
                                                    <hr/>
                                                    <button className="btn btn-primary" onClick={() => this.eliminarCliente(cliente._id)}>
                                                        <i className="material-icons">delete</i>
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminClientsView;