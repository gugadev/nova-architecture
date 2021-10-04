import { container } from "tsyringe";

import { PolicyAdapter } from "packages/application/adapters/policy-adapter";
import { LocalStorage } from "packages/infra/local-storage/LocalStorage";
import { PolicyDataSource } from "packages/core/domain/remote/PolicyDataSource";
import { PolicyRepository } from "packages/core/repository/PolicyRepository";
import { HttpProvider } from "packages/infra/http/HttpProvider";

/**
 * If we have a class implementing an interface,
 * we need to tell the DI container which implementation to use.
 */
export function setupDependencies(): void {
    container.register("IStorage", {
        useClass: LocalStorage,
    });
    container.register("IPolicyAdapter", {
        useClass: PolicyAdapter,
    });
    container.register("IHttpProvider", {
        useClass: HttpProvider,
    });
    container.register("IPolicyDataSource", {
        useClass: PolicyDataSource,
    });
    container.register("IPolicyRepository", {
        useClass: PolicyRepository,
    });
}
