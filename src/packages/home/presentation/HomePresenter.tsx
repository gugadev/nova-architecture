import { HomeViewModel } from "packages/home/presentation/HomeViewModel"
import { useGetPolicies } from "packages/home/presentation/hooks/useGetPgaPolicies";
import { HomeLoading } from "packages/home/ui/HomeLoading";
import { Home } from "packages/home/ui/Home";
import { MepDependenciesContainer } from "packages/core/di/inversify.config";

export const HomePresenter = () => {
    const viewModel: HomeViewModel = MepDependenciesContainer.get<HomeViewModel>("HomeViewModel");
    const userIdentity = "dni-20878393";
    const policiesResult = useGetPolicies(() => viewModel.getPolicies(userIdentity));

    if (policiesResult.isFetching) {
        return <HomeLoading />;
    }
    return <Home pgaPolicies={policiesResult.data ?? []} />;
}