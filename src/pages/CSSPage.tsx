import { PageComponent } from "../components";
import { useUiStore } from "../hooks";

export const CSSPage = () => {    

    const { t } = useUiStore();

    return (
        <PageComponent>
            <ul>
                <li>{ t("css-list-1") }</li>
                <li>{ t("css-list-2") }</li>
                <li>{ t("css-list-3") }</li>
                <li>{ t("css-list-4") }</li>
                <li>{ t("css-list-5") }</li>
                <li>{ t("css-list-6") }</li>
            </ul>
        </PageComponent>
    )   
}