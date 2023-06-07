import JSA from "../../assets/img/JSA.jpg";

import styles from "../../styles/modules/info.module.css";

export const TitleComponent = () => {

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
		</div>
	)
}

export default TitleComponent;