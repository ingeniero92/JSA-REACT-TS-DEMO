import { useContext } from "react";
import { Navigate } from "react-router-dom";

import type { ChildrenRoute } from "../interfaces";
import { AuthContext } from "../store/auth";

export const PrivateRoute = ( { children, params }: ChildrenRoute ): JSX.Element => {

    const { authState: { logged, role } } = useContext( AuthContext );
    
    // Here we verifies all conditions to allow the route
    const isAllowed = () => { 
        return logged && params?.rolesAllowed?.includes(role); 
    }

    return (isAllowed())
		? <> { children }</>
		: <Navigate to="/login" />

}