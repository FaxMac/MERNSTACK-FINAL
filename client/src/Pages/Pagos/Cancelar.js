import React from "react";
import {useAuth0} from '@auth0/auth0-react'

const CancelPage = () => {
    const {user, isAuthenticated} = useAuth0();

    return (
        <div>
            <center>
                <hr />
                <h1>Cancelar Pedido</h1>
                <hr />
            </center>
            { isAuthenticated ? (
            <>
            <form>
                <fieldset>
                    <legend>Formulario de cancelación de pedido</legend>
                </fieldset>
                <div className="form-group row">
                    <label for="statisticEmail" className="col-sm-1 col-form-label">Email:</label>
                    <div className="col-sm-10">
                    <input type="text" readonly="" class="form-control-plaintext" id="staticEmail" value={user.email}/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="exampleTextarea" className="form-label mt-4">Estimado {user.name}, necesitamos que escribas las razones para cancelar tu pedido</label>
                    <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
                </div>
                <hr></hr>
                <button type="submit" className="btn btn-primary">Enviar</button>
                <hr></hr>
                    <div className="alert alert-dismissible alert-warning">
                        <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                        <h4 class="alert-heading">Alerta!</h4>
                        <h5 class="mb-0">La cancelación del pedido solo se hará efectiva <a href="/" class="alert-link">si el administrador del local la acepta.</a>.</h5>
                    </div>
            </form>

            </>
              ) : (
                <>
                </>
              )}

        </div>
    )
}

export default CancelPage;