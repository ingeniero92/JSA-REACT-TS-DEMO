import { useUiStore } from "../../hooks";

import JSA from "../../assets/img/JSA.jpg";

import styles from "../../styles/modules/header.module.css";

export const TitleComponent = () => {

	const { t } = useUiStore();

	return (
		<div className={ styles.title }>
			<div className={ styles.imgContainer }>
				<img src={ JSA } />
			</div>        
			<span className={ styles.name } >
				<i className="fa-brands fa-react"/> 
				{ import.meta.env.VITE_APP_TITLE } 
				<i className="fa-brands fa-react"/>
			</span>
			<span className={ styles.danger } >
				<i className="fa-solid fa-circle-exclamation"/>
				{ t("header-danger")}
				<i className="fa-solid fa-circle-exclamation"/>
			</span>
		</div>
	)
}

export default TitleComponent;