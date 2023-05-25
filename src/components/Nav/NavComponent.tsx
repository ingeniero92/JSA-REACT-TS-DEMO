import { NavLink } from "react-router-dom";

import { useUiStore } from "../../hooks";

import styles from "../../styles/modules/nav.module.css";

export const NavComponent = () => {

    const { t } = useUiStore();

    return (
        <nav className={ styles.nav }>
            <NavLink
                className={ ({ isActive }) => `${ isActive ? styles.active : ""}`}
                to="/"
            >
                { t("nav-home") }
            </NavLink>
            <NavLink
                className={ ({ isActive }) => `${ isActive ? styles.active : ""}`}
                to="/React"
            >
                { t("nav-packages") }
            </NavLink>
            <NavLink
                className={ ({ isActive }) => `${ isActive ? styles.active : ""}`}
                to="/CSS"
            >
                { t("nav-css") }
            </NavLink>
            <NavLink
                className={ ({ isActive }) => `${ isActive ? styles.active : ""}`}
                to="/Backend"
            >
                { t("nav-backend") }
            </NavLink>
            <NavLink
                className={ ({ isActive }) => `${ isActive ? styles.active : ""}`}
                to="/Methodologies"
            >
                { t("nav-methodologies") }
            </NavLink>
        </nav>        
    )
}

export default NavComponent;