import { useEffect, useRef } from "react";

import { PageComponent } from "../components";
import { useUiStore } from "../hooks";

import styles from "../styles/modules/styles.module.css";
import Nero from "../assets/img/Nero.jpg";

export const SecretPage = () => {

    /* TRAD */

    const { t } = useUiStore();

    /* SCROLL TO NERO */

    const nero = useRef<HTMLInputElement>( null );

    useEffect( () => {
        nero.current?.scrollIntoView();
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
