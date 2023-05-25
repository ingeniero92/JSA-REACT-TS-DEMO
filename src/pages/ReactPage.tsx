import { PageComponent } from "../components";
import { useUiStore } from "../hooks";

export const ReactPage = () => {

    const { t } = useUiStore();

    return (
        <PageComponent>
            <ul>
                <li>{ t("react-list-1") }</li>
                <li>{ t("react-list-2") }</li>
                <li>{ t("react-list-3") }</li>
                <li>{ t("react-list-4") }</li>
                <li>{ t("react-list-5") }</li>
                <li>{ t("react-list-6") }</li>
                <li>{ t("react-list-7") }</li>
                <li>{ t("react-list-8") }</li>
                <li>{ t("react-list-9") }</li>
                <li>{ t("react-list-10") }</li>
            </ul>
        </PageComponent>
    )
}
