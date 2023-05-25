import { useEffect } from "react";

import { useAppDispatch, useAppSelector, useUiStore } from "../../hooks";
import { loadBreakingBadQuote, loadBreakingBadQuoteMiddleware } from "../../store";
import { getEnvVariables } from "../../helpers";

import styles from "../../styles/modules/footer.module.css";

export const FooterComponent = () => {

    /* BREAKING BAD (REDUX + THUNKS + FETCH API) (WITHOUT CUSTOM HOOK) */

    const { quote } = useAppSelector( state => state.breakingBad );
    const dispatch = useAppDispatch();

    const onClickNewQuote = () => {
        dispatch( loadBreakingBadQuote() );
    } 

    useEffect( () => {
        dispatch( loadBreakingBadQuoteMiddleware() );
    }, [] )

    /* TRAD */

    const { t } = useUiStore();

    /* ENV */   

    return (
        <footer className={ styles.footer }>
            <span onClick={ onClickNewQuote } className={ styles.disclaimer }> 
                <i className="fa-solid fa-ban"/> 
                { t("footer-disclaimer") }
                <i className="fa-solid fa-ban"/>
            </span>
            <div onClick={ onClickNewQuote } className={ styles.quoteContainer }>
                <i className="fa-solid fa-quote-left" />
                <span className={ styles.quote }>{ quote.quote }</span>
                <span className={ styles.author }>{ quote.author }</span>
                <i className="fa-solid fa-quote-right" />
            </div>
            <span className={ styles.version }>JSA V{ getEnvVariables().APP_VERSION }</span>
        </footer>
    )
}

export default FooterComponent;