import React, {Component} from "react";

class AdminProductsView extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            description: "",
            length: "",
            inversions: "",
            imageUrl: "",
            mensaje: false,
            allProducts: [],
            _id: "",
        }
        this.enviarProducto = this.enviarProducto.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.tiempoMensaje = null;
        this.cerrarMensaje = this.cerrarMensaje.bind(this);
        this.state = {allProducts: []};
    }

    

    componentDidMount(){
        this.obtenerProductos();
    }

    enviarProducto(e){
        e.preventDefault();
        if(this.state._id){
            fetch('http://localhost:3030/api/products/details/' + this.state._id,{
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
                this.setState({mensaje: true, title:'',description:'',length:'',inversions:'',imageUrl:''});
                this.tiempoMensaje = setInterval(this.cerrarMensaje, 2000);
                console.log(data);
            })
        }else{
        console.log(this.state);
        fetch('http://localhost:3030/api/register_product',{
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
            this.setState({mensaje: true, title:'',description:'',length:'',inversions:'',imageUrl:''});
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

    obtenerProductos(){
        fetch('http://localhost:3030/api/products')
        .then(res => res.json())
        .then(data => this.setState({allProducts: data}))
        .catch(err => console.log(err));
    }

    editarProducto(id){
        fetch('http://localhost:3030/api/products/details/' + id)
        .then(res => res.json())
        .then(data => {
            this.setState({
                title: data.title,
                description: data.description,
                length: data.length,
                inversions: data.inversions,
                imageUrl: data.imageUrl,
                _id: data._id
            });
        })

    }

    eliminarProducto(id){
        fetch('http://localhost:3030/api/products/details/' + id, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'Application/json',
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.obtenerProductos();
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
                                    <h5 className="card-title">Agregar producto</h5>
                                    <form onSubmit={this.enviarProducto}>
                                        <div className="row">
                                            <div className="form-group col-12">
                                                <input type="text" name="title" className="form-control" placeholder="Nombre Producto" value={this.state.title} onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="form-group col-12">
                                                <input type="text" name="description" className="form-control" placeholder="Descripción Producto" value={this.state.description} onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="form-group col-12">
                                                <input type="text" name="length" className="form-control" placeholder="Precio Producto" value={this.state.length} onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="form-group col-12">
                                                <input type="text" name="inversions" className="form-control" placeholder="Existencias Producto" value={this.state.inversions} onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="form-group col-12">
                                                <input type="text" name="imageUrl" className="form-control" placeholder="URL Imagen Producto" value={this.state.imageUrl} onChange={this.handleChange}/>
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
                                                        Producto Guardado
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
                                    <th>Descripción</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Imagen</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.allProducts.map(producto => {
                                        return(
                                            <tr key={producto._id}>
                                                <td>{producto.title}</td>
                                                <td>{producto.description}</td>
                                                <td>{producto.length}</td>
                                                <td>{producto.inversions}</td>
                                                <td><img src={producto.imageUrl} className="product-card-img"  alt="" width='10%' height='10%'></img></td>
                                                <td>
                                                    <button className="btn btn-primary" onClick={() => this.editarProducto(producto._id)}>
                                                        <i className="material-icons">create</i>
                                                    </button>
                                                    <hr/>
                                                    <button className="btn btn-primary" onClick={() => this.eliminarProducto(producto._id)}>
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

export default AdminProductsView;