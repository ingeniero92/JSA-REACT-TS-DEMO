import { PageComponent } from "../components";
import { useUiStore } from "../hooks";

export const HomePage = () => {

    const { t } = useUiStore();

    return (
        <PageComponent>
            <span dangerouslySetInnerHTML={{__html: t( "home-text-1" )}}></span>           
            <span>{ t("home-text-2") }</span>
            <span>{ t("home-text-3") }</span>
            <span>{ t("home-text-4") }</span>
        </PageComponent>
    )
}