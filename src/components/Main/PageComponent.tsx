import { ChildrenProp } from "../../interfaces";

import styles from "../../styles/modules/styles.module.css";

export const PageComponent = ( { children }: ChildrenProp ) => {

    return (
        <div className={ styles.page }>
            <div className={ styles.pageContainer }>
                { children }
            </div>
        </div>
    )
}

export default PageComponent;