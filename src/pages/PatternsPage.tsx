import { PageComponent } from "../components";
import { useUiStore } from "../hooks";

export const PatternsPage = () => {

    const { t } = useUiStore();

    return (
        <PageComponent>
            <ul>
                <li>{ t("patterns-list-1") }</li>
                <li>{ t("patterns-list-2") }</li>
                <li>{ t("patterns-list-3") }</li>
                <li>{ t("patterns-list-4") }</li>
                <li>{ t("patterns-list-5") }</li>
            </ul>
        </PageComponent>
    )
}
