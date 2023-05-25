import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store, AuthProvider } from "./store";
import { HeaderComponent, MainComponent, FooterComponent } from "./components";

import "./styles/scss/index.scss"; // GLOBAL SCSS

const JSAReactTSDemoApp = () => {
    return (
        <AuthProvider>
            <ReduxProvider store={ store }>
                <BrowserRouter>
                    <HeaderComponent />
                    <MainComponent />
                    <FooterComponent />
                </BrowserRouter>
            </ReduxProvider>
        </AuthProvider>
    )
}

export default JSAReactTSDemoApp;