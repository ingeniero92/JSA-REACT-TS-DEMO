import { useUiStore } from "../../hooks";

import JSA from "../../assets/img/JSA.jpg";

import styles from "../../styles/modules/info.module.css";

export const InfoComponent = () => {

    const { t } = useUiStore();

    return (
        <div className={ styles.info }>

            <span className={ styles.name }>
                { import.meta.env.VITE_APP_TITLE }  
            </span>	

            <div className={ styles.container } >

                <div className={ styles.textInfo }>
                    <span>{ t( "info-text-1" ) }</span>
                    <span>{ t( "info-text-2" ) }</span>
                </div>

                <div className={ styles.title }>
                    <div className={ styles.imgContainer }>
                        <img src={ JSA } />
                    </div>                            
                    <span className={ styles.job }>{ t( "info-title" ) }</span>
                </div>

            </div>

        </div>
    )
}

export default InfoComponent;