import { inject, injectable } from "inversify";

import { Policy } from "packages/core/domain/entities/Policy";
import { IPolicyRepository } from "packages/core/repository/IPolicyRepository";

@injectable()
export class HomeViewModel {
    @inject("IPolicyRepository") private repository?: IPolicyRepository;

    // constructor(@inject("IPolicyRepository") private repository: IPolicyRepository) {}

    getPolicies(userIdentity: string): Promise<Array<Policy>> {
        return this.repository!.getPgaPolicies(userIdentity);
    }
}