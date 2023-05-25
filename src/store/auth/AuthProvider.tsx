import { useCallback, useReducer } from "react";

import type { ChildrenProp, AuthState } from "../../interfaces";
import { Roles } from "../../interfaces";
import { getRandomInt } from "../../helpers";
import { AuthContext, AuthReducer, createLoginAction, createLogoutAction } from ".";

const initialAuthState: AuthState = {
    logged: false,
    userName: "",
    role: Roles.guest,
    avatar: 0
};

const init = (): AuthState => {

    const user   = localStorage.getItem( "jsa-connected" );
    const avatar = localStorage.getItem( "jsa-avatar" );
    
    if( user ){       
        return {
            logged: !!user,
            userName: user,
            role: Roles.cat_lover,
            avatar: avatar ? Number.parseInt( avatar ) : 0
        }
    } else {
        return {
            logged: false,
            userName: "",
            role: Roles.guest,
            avatar: 0
        }
    }

}

export const AuthProvider = ( { children }: ChildrenProp ) => {

    const [ authState, dispatch ] = useReducer( AuthReducer, initialAuthState, init );

    const login = ( userName: string ) => {        

        const randomAvatar = getRandomInt( 1, 151 );

        !userName && ( userName = "PokeUser" + randomAvatar.toString() );

        // const resp is a mock of a sucessfull API response to validate connection
        const resp = {
            ok: true,
            userName,
            token: getRandomInt().toString(),
            avatar: randomAvatar
        };

        if(resp.ok){
            localStorage.setItem( "jsa-connected", resp.userName );
            localStorage.setItem( "jsa-token", resp.token );
            localStorage.setItem( "jsa-avatar", resp.avatar.toString() );
            dispatch( createLoginAction( resp.userName, resp.avatar) );
        } else {
            dispatch( createLogoutAction() );
        }        

    }

    const logout = () => {
        // We can mock a sucessfull API response to validate disconnection
        localStorage.removeItem( "jsa-connected" );
        localStorage.removeItem( "jsa-token" );
        localStorage.removeItem( "jsa-avatar" );
        dispatch( createLogoutAction() );
    }

    const checkToken = useCallback( (): boolean => {

        const userName = localStorage.getItem( "jsa-connected" );
        const token    = localStorage.getItem( "jsa-token" );
        const avatar   = localStorage.getItem( "jsa-avatar" );

        if ( !token || !userName ) {
            dispatch( createLogoutAction() );
            return false;
        }

        // const resp is a mock of a sucessfull API response to validate the Connection Token
        const resp = {
            ok: true,
            userName,
            token: getRandomInt().toString(),
            avatar: avatar ? Number.parseInt( avatar ) : getRandomInt( 1, 151 )
        };

        if ( resp.ok ) {
            localStorage.setItem( "jsa-connected", resp.userName );
            localStorage.setItem( "jsa-token", resp.token );
            localStorage.setItem( "jsa-avatar", resp.avatar.toString() );
            !authState.logged && dispatch( createLoginAction( resp.userName, resp.avatar ) );
            return true;
        } else {
            dispatch( createLogoutAction() );
            return false;
        }

    }, [] )

    return (
        <AuthContext.Provider value={{
            authState,
            login,
            logout,
            checkToken
        }}>
            { children }
        </AuthContext.Provider>
    )
    
}