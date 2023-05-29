import { PageComponent } from "../components";
import { useUiStore } from "../hooks";

export const BackendPage = () => {

	const { t } = useUiStore();

	return (
		<PageComponent>
			<ul>
				<li>{ t("backend-list-1") }</li>
				<li>{ t("backend-list-2") }</li>
				<li>{ t("backend-list-3") }</li>
				<li>{ t("backend-list-4") }</li>
				<li>{ t("backend-list-5") }</li>
			</ul>
		</PageComponent>
	)
}
