import { inject, injectable } from "tsyringe";

import { Policy } from "packages/core/domain/entities/Policy";
import { IPolicyDataSource } from "packages/core/domain/remote/IPolicyDataSource";
import { VehiclePolicy } from "packages/core/domain/entities/VehiclePolicy";
import { HealthPolicy } from "packages/core/domain/entities/HealthPolicy";
import { ILocalStorage } from "packages/infra/storage/local/ILocalStorage";
import { IHttpProvider } from "packages/infra/http/IHttpProvider";
import { IPolicyAdapter } from "packages/application/adapters/IPolicyAdapter";

enum PoliciesEndpoints {
    Pga = "insureds/:userIdentity/insurances/all/policies",
    Vehicles = "insureds/:userIdentity/insurances/vehicle/policies",
    Health = "insureds/:userIdentity/insurances/health/policies",
}

@injectable()
export class PolicyDataSource implements IPolicyDataSource {
    constructor(
        @inject("IHttpProvider") private http: IHttpProvider,
        @inject("IPolicyAdapter") private adapter: IPolicyAdapter,
        @inject("ILocalStorage") private storage: ILocalStorage
    ) {}

    async getPgaPolicies(userIdentity: string): Promise<Array<Policy>> {
        const options = {
            token: this.storage.get<string>("auth_token"),
            params: { userIdentity },
        };
        const policies = await this.http.get<Array<Record<string, any>>>(
            PoliciesEndpoints.Pga,
            options
        );
        return policies.map((policy) =>
            this.adapter.turnIntoModel<Policy>(policy)
        );
    }

    async getVehiclePolicies(
        userIdentity: string
    ): Promise<Array<VehiclePolicy>> {
        const options = {
            token: this.storage.get<string>("auth_token"),
            params: { userIdentity },
        };
        const policies = await this.http.get<Array<Record<string, any>>>(
            PoliciesEndpoints.Vehicles,
            options
        );
        return policies.map((policy) =>
            this.adapter.turnIntoModel<VehiclePolicy>(policy)
        );
    }

    async getHealthPolicies(
        userIdentity: string
    ): Promise<Array<HealthPolicy>> {
        const options = {
            token: this.storage.get<string>("auth_token"),
            params: { userIdentity },
        };
        const policies = await this.http.get<Array<Record<string, any>>>(
            PoliciesEndpoints.Health,
            options
        );
        return policies.map((policy) =>
            this.adapter.turnIntoModel<HealthPolicy>(policy)
        );
    }
}
