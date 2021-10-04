import { Policy } from "packages/core/domain/entities/Policy";

export interface IPolicyStore {
    getPgaPolicies(): Promise<Array<Policy>>;
}
