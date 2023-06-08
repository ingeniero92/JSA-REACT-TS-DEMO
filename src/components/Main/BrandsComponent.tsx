import axios from "../../assets/img/brands/axios.png";
import cssmodules from "../../assets/img/brands/cssmodules2.png";
import postcss from "../../assets/img/brands/postcss.png";
import react from "../../assets/img/brands/react.png";
import reactrouter from "../../assets/img/brands/reactrouter.png";
import redux from "../../assets/img/brands/redux.png";
import sass from "../../assets/img/brands/sass.png";
import typescript from "../../assets/img/brands/typescript.png";

import styles from "../../styles/modules/main.module.css";

export const BrandsComponent = () => {

    return (
        <div className={ styles.brands }>
            <img src={react} alt="react" />
            <img src={typescript} alt="typescript" />
            <img src={redux} alt="redux" />
            <img src={reactrouter} alt="reactrouter" />
            <img src={axios} alt="axios" />
            <img src={sass} alt="sass" />
            <img src={cssmodules} alt="cssmodules" />
            <img src={postcss} alt="postcss" />
        </div>
    )
}

export default BrandsComponent;