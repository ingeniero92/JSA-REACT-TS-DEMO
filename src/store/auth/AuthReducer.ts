import type { AuthAction, AuthState } from "../../interfaces";
import { authActions, Roles } from "../../interfaces";

export const AuthReducer = ( state: AuthState, action: AuthAction ): AuthState => {

    switch( action.type ){
        case authActions.login:
            return {
                logged: true,
                userName: action.payload.userName,
                role: Roles.cat_lover,
                avatar: action.payload.avatar
            }
        case authActions.logout:
            return {
                logged: false,
                userName: "",
                role: Roles.guest,
                avatar: 0
            }
        default: 
            return state;
    }

}
