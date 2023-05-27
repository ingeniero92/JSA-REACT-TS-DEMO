import { useUiStore } from "../../hooks";

import styles from "../../styles/modules/header.module.css";

export const LinksComponent = () => {

    const { t } = useUiStore();

    return (
        <div className={ styles.links }>
            <a className={ styles.largeLink } href="https://www.linkedin.com/in/ingeniero92/" target="_blank">
                <i className="fa-brands fa-linkedin" />
                <span>
                    { t("header-link-linkedin") }
                </span>
            </a>
            <a className={ styles.largeLink } href="https://github.com/ingeniero92/jsa-react-ts-demo" target="_blank">
                <i className="fa-brands fa-github" />
                <span>
                    { t("header-link-github") }
                </span>
            </a>
            <a className={ styles.largeLink } href="tel:+34684074430">
                <i className="fa-solid fa-phone"/>
                <span>
                    { t("header-link-telephone") }
                </span>
            </a>            
            <a href="mailto:ingeniero92@gmail.com">
                <i className="fa-solid fa-envelope"/>
                <span>
                    { t("header-link-email") }
                </span>
            </a>            
            <a href="./pdf/CV Jose Serrano Alvarez.pdf" target="_blank">
                <i className="fa-solid fa-file-pdf"/>
                <span>
                    { t("header-link-download") }
                </span>
            </a>
        </div>
    )
}

export default LinksComponent;