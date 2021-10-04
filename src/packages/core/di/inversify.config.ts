import { Container } from "inversify";
import { IPolicyAdapter } from "packages/application/adapters/IPolicyAdapter";
import { PolicyAdapter } from "packages/application/adapters/policy-adapter";

import { HomeViewModel } from "packages/home/presentation/HomeViewModel";
import { LocalStorage } from "packages/infra/LocalStorage/LocalStorage";
import { IStorage } from "packages/infra/LocalStorage/storage.interface";
import { IPolicyDataSource } from "packages/core/domain/remote/IPolicyDataSource";
import { PolicyDataSource } from "packages/core/domain/remote/PolicyDataSource";
import { IPolicyRepository } from "packages/core/repository/IPolicyRepository";
import { PolicyRepository } from "packages/core/repository/PolicyRepository";
import { HttpProvider } from "packages/infra/http/HttpProvider";
import { IHttpProvider } from "packages/infra/http/IHttpProvider";

const MepDependenciesContainer = new Container();

export const createDependencyContainer = () => {
    MepDependenciesContainer.bind<IStorage>("IStorage").to(LocalStorage);
    MepDependenciesContainer.bind<IHttpProvider>("IHttpProvider").to(HttpProvider);
    MepDependenciesContainer.bind<IPolicyAdapter>("IPolicyAdapter").to(PolicyAdapter);
    MepDependenciesContainer.bind<IPolicyDataSource>("IPolicyDataSource").to(PolicyDataSource);
    MepDependenciesContainer.bind<IPolicyRepository>("IPolicyRepository").to(PolicyRepository);
    MepDependenciesContainer.bind<HomeViewModel>("HomeViewModel").to(HomeViewModel);
}

export { MepDependenciesContainer }