import { useUiStore } from "../../hooks";
import { languages } from "../../interfaces";

import styles from "../../styles/modules/header.module.css";

export const LangComponent = () => {

    /* IU (REDUX + CUSTOM HOOK) */

    const { lang, startChangeLangToES, startChangeLangToEN } = useUiStore();

    return (
        <div className={ styles.lang } >
            <span><a lang={ languages.ES } className={ lang != languages.ES ? styles.disabled : styles.active } onClick={ startChangeLangToES }>{ languages.ES }</a></span>
            <span><a lang={ languages.EN } className={ lang != languages.EN ? styles.disabled : styles.active } onClick={ startChangeLangToEN }>{ languages.EN }</a></span>     
        </div>
    )
}

export default LangComponent;