import { useUiStore } from "../../hooks";
import { PageComponent } from "..";

import styles from "../../styles/modules/styles.module.css";

export const InfoComponent = () => {

    const { t } = useUiStore();

    return (
        <PageComponent>
            <span className={ styles.job }>{ t( "info-title" ) }</span>
            <span dangerouslySetInnerHTML={{__html: t( "info-text-1" )}}></span>
            <span>{ t( "info-text-2" ) }</span>
            <span>{ t( "info-text-3" ) }</span>
        </PageComponent>
    )
}

export default InfoComponent;