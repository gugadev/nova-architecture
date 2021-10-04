import { Expose } from "class-transformer";

import { BaseModel } from "./BaseModel";

export class Vehicle extends BaseModel {
    @Expose() license = "";
    @Expose() policyId = -1;
    @Expose() brand = "";
    @Expose() model = "";
    @Expose() manufactureYear = -1;
    @Expose() chasis = "";
    @Expose() engine = "";
    @Expose() usage = "";
    @Expose() insuredAmount = -1;
    @Expose() gps = false;
}
