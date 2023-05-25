import { PageComponent } from "../components";
import { useUiStore } from "../hooks";

export const MethodologiesPage = () => {

    const { t } = useUiStore();

    return (
        <PageComponent>
            <ul>
                <li>{ t("methodologies-list-1") }</li>
                <li>{ t("methodologies-list-2") }</li>
                <li>{ t("methodologies-list-3") }</li>
                <li>{ t("methodologies-list-4") }</li>
            </ul>
        </PageComponent>
    )
}
