import { Link, Outlet } from "react-router-dom";

import { PageComponent } from "../components";

import styles from "../styles/modules/styles.module.css";

export const PersonalPage = () => {  

    return (
        <PageComponent>
            <div className={ styles.personal }>
                <Link to="/Personal/Secret"><i className="fa-solid fa-cat"/></Link>
                <Outlet />
            </div>
        </PageComponent>
    )

}