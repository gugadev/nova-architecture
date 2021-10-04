import { Policy } from "packages/core/domain/entities/Policy";

export interface IPolicyRepository {
    getPgaPolicies: (userIdentity: string) => Promise<Array<Policy>>;
}
