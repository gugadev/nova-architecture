import { Expose } from "class-transformer";

import { BaseModel } from "./BaseModel";

export enum InsuredType {
    Holder = "HOLDER",
    Dependent = "DEPENDENT",
}

export class Insured extends BaseModel {
    @Expose() policyId = -1;
    @Expose() userIdentity = "";
    @Expose() code = "";
    @Expose() type = InsuredType.Dependent;
    @Expose() fullName = "";
}
