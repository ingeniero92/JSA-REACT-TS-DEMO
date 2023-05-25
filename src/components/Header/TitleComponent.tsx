import JSA from "../../assets/img/JSA.jpg";

import styles from "../../styles/modules/header.module.css";

export const TitleComponent = () => {
	return (
		<div className={ styles.title }>
			<div>
				<img src={ JSA } />
			</div>        
			<span>
				<i className="fa-brands fa-react"/> 
				{ import.meta.env.VITE_APP_TITLE } 
				<i className="fa-brands fa-react"/>
			</span>
		</div>
	)
}

export default TitleComponent;