import { useUiStore } from "../../hooks";
import { languages } from "../../interfaces";

import styles from "../../styles/modules/header.module.css";

export const LangComponent = () => {

    /* IU (REDUX + CUSTOM HOOK) */

    const { lang, startChangeLangToES, startChangeLangToEN } = useUiStore();

    return (
        <div className={ styles.lang } >
            <span lang={ languages.ES } className={ lang != languages.ES ? styles.disabled : undefined } onClick={ startChangeLangToES }>{ languages.ES }</span>
            <span lang={ languages.EN } className={ lang != languages.EN ? styles.disabled : undefined } onClick={ startChangeLangToEN }>{ languages.EN }</span>     
        </div>
    )
}

export default LangComponent;