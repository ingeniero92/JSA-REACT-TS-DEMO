import { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { animateScroll } from "react-scroll";

import type { ScrollState } from "../interfaces";
import { PageComponent } from "../components";

import styles from "../styles/modules/main.module.css";

export const PersonalPage = () => {  

    const state : ScrollState = useLocation().state;

    useEffect( () => {
        if(state?.scroll == null){
            animateScroll.scrollToBottom();
        }        
    }, [] );

    return (
        <PageComponent>
            <div className={ styles.personal }>
                <NavLink
                    className={ ({ isActive }) => `${ isActive ? styles.active : ""}`}
                    to="/Personal/Secret"
                >
                    <i className="fa-solid fa-cat"/>
                </NavLink>
                <Outlet />
            </div>
        </PageComponent>
    )

}