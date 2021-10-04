import { inject, injectable } from "inversify";

import { Policy } from "packages/core/domain/entities/Policy";
import { IPolicyDataSource } from "packages/core/domain/remote/IPolicyDataSource";
import { VehiclePolicy } from "packages/core/domain/entities/VehiclePolicy";
import { HealthPolicy } from "packages/core/domain/entities/HealthPolicy";
import { IStorage } from "packages/infra/LocalStorage/storage.interface";
import { IHttpProvider } from "packages/infra/http/IHttpProvider";
import { IPolicyAdapter } from "packages/application/adapters/IPolicyAdapter";

enum PoliciesEndpoints {
    Pga = "insureds/:userIdentity/insurances/all/policies",
    Vehicles = "insureds/:userIdentity/insurances/vehicle/policies",
    Health = "insureds/:userIdentity/insurances/health/policies"
}

@injectable()
export class PolicyDataSource implements IPolicyDataSource {
    @inject("IHttpProvider") private http?: IHttpProvider;
    @inject("IPolicyAdapter") private adapter?: IPolicyAdapter;
    @inject("IStorage") private storage?: IStorage;

    // constructor(
    //     @inject("IHttpProvider") private http: IHttpProvider,
    //     @inject("IPolicyAdapter") private adapter: IPolicyAdapter,
    //     @inject("IStorage") private storage: IStorage
    // ) {}

    getPgaPolicies(userIdentity: string): Promise<Array<Policy>> {
        const options = {
            token: this.storage!.get<string>("auth_token"),
            params: { userIdentity }
        }
        return (
            this
                .http!
                .get<Array<Record<string, any>>>(PoliciesEndpoints.Pga, options)
                .then(policies => {
                    return policies.map(this.adapter!.turnIntoModel)
                })
        );
    }

    getVehiclePolicies(userIdentity: string): Promise<Array<VehiclePolicy>> {
        const options = {
            token: this.storage!.get<string>("auth_token"),
            params: { userIdentity }
        }
        return (
            this
                .http!
                .get<Array<Record<string, any>>>(PoliciesEndpoints.Vehicles, options)
                .then(policies => {
                    return policies.map(policy => 
                        this.adapter!.turnIntoModel<VehiclePolicy>(policy))
                })
        );
    }

    getHealthPolicies(userIdentity: string): Promise<Array<HealthPolicy>> {
        const options = {
            token: this.storage!.get<string>("auth_token"),
            params: { userIdentity }
        }
        return (
            this
                .http!
                .get<Array<Record<string, any>>>(PoliciesEndpoints.Health, options)
                .then(policies => {
                    return policies.map(policy => 
                        this.adapter!.turnIntoModel<HealthPolicy>(policy))
                })
        );
    }
}