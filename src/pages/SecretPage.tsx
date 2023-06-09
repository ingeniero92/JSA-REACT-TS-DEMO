import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { animateScroll } from "react-scroll";

import type { ScrollState } from "../interfaces";
import { PageComponent, CrossFadeImage } from "../components";
import { useUiStore } from "../hooks";

import styles from "../styles/modules/main.module.css";
import Nero from "../assets/img/Nero.jpg";

export const SecretPage = () => {

    /* TRAD */

    const { t } = useUiStore();

    /* SCROLL TO NERO */

    const nero = useRef<HTMLInputElement>( null );

    const state : ScrollState = useLocation().state;

    useEffect( () => {
        if(state?.scroll == null){
            //nero.current?.scrollIntoView( { block: "end", behavior: "smooth" } );
            animateScroll.scrollToBottom();
        }        
    }, [] );

    return (
        <PageComponent>
            <div className={ styles.nero }>
                <span ref={ nero }>{ t("secret-text") }</span>
                <CrossFadeImage
                    src={ Nero }
                    alt="nero"
                    transitionDuration={0.35}
                    curve="ease-in-out"
                />
            </div>
        </PageComponent>
    )
}
