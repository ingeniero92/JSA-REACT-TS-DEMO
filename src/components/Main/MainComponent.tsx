import { InfoComponent, NavComponent } from "..";
import { AppRouter } from "../../router";

import styles from "../../styles/modules/main.module.css";

export const MainComponent = () => {
    return (
        <main className={ styles.main }>
            <InfoComponent />
            <NavComponent />     
            <AppRouter />
        </main>
    )
}

export default MainComponent;