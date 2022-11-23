import React from "react";
import { useAuth0} from '@auth0/auth0-react';

export const LoginButton = () =>{
    const {loginWithRedirect} = useAuth0();

    return(
        <li className="nav-item">
            <button className="btn btn-outline-secondary" onClick={() => loginWithRedirect()}>Ingresar</button>
        </li>
    )
}