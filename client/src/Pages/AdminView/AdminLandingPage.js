const AdminLandingPage = () => {
    return(
        <div>
            <center>
                <hr />
                <h1>Vista de Admin</h1>
                <hr />
                <a className="btn btn-outline-secondary" href="/admin/productos">Administrar Productos</a>
                <a className="btn btn-outline-primary" href="/admin/clientes">Administrar Clientes</a>
                <a className="btn btn-outline-secondary" href="/admin/pedidos">Ver Pedidos</a>
            </center>
        </div>
    )

}

export default AdminLandingPage;