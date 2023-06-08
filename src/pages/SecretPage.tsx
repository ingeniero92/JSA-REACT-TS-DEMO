import { useEffect, useRef } from "react";
import { animateScroll } from 'react-scroll';
import { useLocation } from "react-router-dom";

import { PageComponent } from "../components";
import { useUiStore } from "../hooks";

import styles from "../styles/modules/main.module.css";
import Nero from "../assets/img/Nero.jpg";

export const SecretPage = () => {

    /* TRAD */

    const { t } = useUiStore();

    /* SCROLL TO NERO */

    const location = useLocation();

    const nero = useRef<HTMLInputElement>( null );

    useEffect( () => {
        //nero.current?.scrollIntoView({ behavior: "smooth" });
        if(location.state?.scroll == null){
            animateScroll.scrollToBottom();
        }        
    }, [] );

    return (
        <PageComponent>
            <div ref={ nero } className={ styles.nero }>
                <span>{ t("secret-text") }</span>
                <img src={ Nero }></img>
            </div>
        </PageComponent>
    )
}
