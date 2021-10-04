import { container } from "tsyringe";

import { PolicyAdapter } from "packages/application/adapters/policy-adapter";
import { LocalStorage } from "packages/infra/storage/local/LocalStorage";
import { PolicyDataSource } from "packages/core/domain/remote/PolicyDataSource";
import { PolicyRepository } from "packages/core/repository/PolicyRepository";
import { HttpProvider } from "packages/infra/http/HttpProvider";
import { ILocalStorage } from "packages/infra/storage/local/ILocalStorage";
import { IPolicyAdapter } from "packages/application/adapters/IPolicyAdapter";
import { IHttpProvider } from "packages/infra/http/IHttpProvider";
import { IPolicyDataSource } from "packages/core/domain/remote/IPolicyDataSource";
import { IPolicyRepository } from "packages/core/repository/IPolicyRepository";

/**
 * If we have a class implementing an interface,
 * we need to tell the DI container which implementation to use.
 */
export function setupDependencies(): void {
    container.register<ILocalStorage>("ILocalStorage", {
        useClass: LocalStorage,
    });
    container.register<IPolicyAdapter>("IPolicyAdapter", {
        useClass: PolicyAdapter,
    });
    container.register<IHttpProvider>("IHttpProvider", {
        useClass: HttpProvider,
    });
    container.register<IPolicyDataSource>("IPolicyDataSource", {
        useClass: PolicyDataSource,
    });
    container.register<IPolicyRepository>("IPolicyRepository", {
        useClass: PolicyRepository,
    });
}
