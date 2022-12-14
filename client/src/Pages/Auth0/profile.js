import React from "react";
import { useAuth0 } from '@auth0/auth0-react';

export const Profile = () => {
    const {user, isAuthenticated, isLoading} = useAuth0();

    if(isLoading){
        return <div>Cargando...</div>
    }
    return(
        isAuthenticated && (
                <li className="nav-item">
                    <a className="nav-link" href="/">Cliente: {user.given_name} {} </a>
                </li>
        )
    )
}