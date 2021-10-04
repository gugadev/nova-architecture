import { inject, injectable } from "inversify";

import { Policy } from "packages/core/domain/entities/Policy";
import { IPolicyDataSource } from "packages/core/domain/remote/IPolicyDataSource";

@injectable()
export class PolicyRepository {
    @inject("IPolicyDataSource") private datasource?: IPolicyDataSource
    // constructor(@inject("IPolicyDataSource") private datasource: IPolicyDataSource) {}

    getPgaPolicies(userIdentity: string): Promise<Array<Policy>> {
        return this.datasource!.getPgaPolicies(userIdentity);
    }
}