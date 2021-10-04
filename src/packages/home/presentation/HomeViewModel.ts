import { inject, injectable } from "tsyringe";

import { Policy } from "packages/core/domain/entities/Policy";
import { IPolicyRepository } from "packages/core/repository/IPolicyRepository";

@injectable()
export class HomeViewModel {
    constructor(
        @inject("IPolicyRepository") private repository: IPolicyRepository
    ) {}

    getPgaPolicies(userIdentity: string): Promise<Array<Policy>> {
        console.log("repository", this);
        return this.repository.getPgaPolicies(userIdentity);
    }
}
