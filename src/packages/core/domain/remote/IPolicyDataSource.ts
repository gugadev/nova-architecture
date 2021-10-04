import { Policy } from "packages/core/domain/entities/Policy";
import { HealthPolicy } from "packages/core/domain/entities/HealthPolicy";
import { VehiclePolicy } from "packages/core/domain/entities/VehiclePolicy";

export interface IPolicyDataSource {
    getPgaPolicies: (userIdentity: string) => Promise<Array<Policy>>;
    getVehiclePolicies: (userIdentity: string) => Promise<Array<VehiclePolicy>>;
    getHealthPolicies: (userIdentity: string) => Promise<Array<HealthPolicy>>;
}