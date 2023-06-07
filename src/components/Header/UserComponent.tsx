import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { usePokemonStore, useUiStore } from "../../hooks";
import { AuthContext } from "../../store";

import styles from "../../styles/modules/header.module.css";

export const UserComponent = () => {

    /* AUTH */

    const { authState: { logged, userName, avatar }, login, logout, checkToken } = useContext( AuthContext );

    useEffect( () => {
        checkToken();
    }, [ checkToken ] );

    /* INPUTS */

    const [ inputValue, setInputValue ] = useState<string>("");

    const onChangeInput = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        event.target.value.length < 12 && setInputValue(event.target.value);
    }

    const onLogin = () => {
        setInputValue("");
        logged ?  logout() : login(inputValue);
    }
   
    /* POKEMON AVATAR (REDUX + CUSTOM HOOK + AXIOS) */

    const { pokemon, isLoading: isLoadingPokeAvatar, loadPokemon } = usePokemonStore();

    useEffect( () => {
        logged && loadPokemon(avatar);
    }, [ logged ] );

    /* TRAD */

    const { t } = useUiStore();

    /* REACT ROUTER */

    const location = useLocation();

    const isSecretPage = (): boolean => {
        return location.pathname == "/Personal/Secret" ? true : false;
    }

    /* RETURN */

    return (
        <div className={ styles.user }>
            { !logged && 
                <input onChange={ onChangeInput } value={ inputValue } placeholder={ t("header-login-placeholder") }/> 
            }
            <span className={ styles.button } onClick={ onLogin }>
                <span>{ `${ logged ? t("header-logout") + " " + userName : t("header-login")}` }</span> 
            </span>
            { logged && 
                <span className={ styles.avatar }>
                    <Link to="/Personal/Secret"> 
                        { !isLoadingPokeAvatar && 
                            <img 
                                className={`${ isSecretPage() ? styles.active : ""}`}
                                src={ pokemon?.sprites.front_default } 
                            /> 
                        } 
                    </Link>
                </span>
            }
        </div>
    )

}

export default UserComponent;