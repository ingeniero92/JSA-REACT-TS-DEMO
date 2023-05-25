import { LangComponent, LinksComponent, TitleComponent, UserComponent } from "..";

import styles from "../../styles/modules/header.module.css";

export const HeaderComponent = () => {
    return (
        <header className={ styles.header }>
            <div className={ styles.mainRow }>
                <LinksComponent />     
                <div className={ styles.settings }>
                    <UserComponent />
                    <LangComponent />
                </div>       
            </div>            
            <TitleComponent />
        </header>
  )
}

export default HeaderComponent;