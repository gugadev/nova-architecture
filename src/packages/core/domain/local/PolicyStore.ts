import { IPolicyStore } from "packages/core/domain/local/IPolicyStore";
import { Policy } from "../entities/Policy";

/**
 * Here we define the store for the policies
 * using the mobx state management library
 */
export class PolicyStore implements IPolicyStore {
    getPgaPolicies(): Promise<Array<Policy>> {
        throw new Error("Method not implemented.");
    }
}
