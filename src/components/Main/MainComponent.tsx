import { InfoComponent, NavComponent } from "..";
import { AppRouter } from "../../router";

import styles from "../../styles/modules/styles.module.css";

export const MainComponent = () => {
    return (
        <div className={ styles.main }>
            <InfoComponent />
            <NavComponent />     
            <AppRouter />
        </div>
    )
}

export default MainComponent;