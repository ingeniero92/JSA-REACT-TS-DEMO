import { LangComponent, LinksComponent, UserComponent } from "..";

import styles from "../../styles/modules/header.module.css";

export const HeaderComponent = () => {
    return (
        <header className={ styles.header }>
            <div className={ styles.container }>
                <LinksComponent />     
                <div className={ styles.settings }>
                    <UserComponent />
                    <LangComponent />
                </div>       
            </div>            
        </header>
  )
}

export default HeaderComponent;