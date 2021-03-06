import { container } from "tsyringe";

import { HomeViewModel } from "packages/home/presentation/HomeViewModel";
import { useGetPgaPolicies } from "packages/home/presentation/hooks/useGetPgaPolicies";
import { HomeLoading } from "packages/home/ui/HomeLoading";
import { Home } from "packages/home/ui/Home";
import { ILocalStorage } from "packages/infra/storage/local/ILocalStorage";

export const HomePresenter = (): JSX.Element => {
    const storage = container.resolve<ILocalStorage>("ILocalStorage");
    const vm = container.resolve<HomeViewModel>(HomeViewModel);

    const identity = storage.get<string>("user_identity");

    const result = useGetPgaPolicies(() => vm.getPgaPolicies(identity));

    if (result.isFetching) {
        return <HomeLoading />;
    }
    if (result.isError) {
        return <h1>Error</h1>;
    }
    return <Home pgaPolicies={result.data ?? []} />;
};
