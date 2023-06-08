import { Link } from "react-router-dom";

import { PageComponent, BrandsComponent } from "../components";
import { useUiStore } from "../hooks";

import Yoda from "../assets/img/Yoda.gif";

import styles from "../styles/modules/main.module.css";

export const HomePage = () => {

    const { t } = useUiStore();

    return (
        <PageComponent>
            <span dangerouslySetInnerHTML={{__html: t( "home-text-1" )}}></span>         
            <img className={ styles.gif } src={Yoda} alt="Yoda" />
            <span>{ t("home-text-2") }</span>
            <BrandsComponent />
            <span>{ t("home-text-3") }</span>
            <div className={ styles.personal }>
                <Link to="/Personal/Secret" state={ { scroll: false } } ><i className="fa-solid fa-cat"/></Link>
            </div>
        </PageComponent>
    )
}