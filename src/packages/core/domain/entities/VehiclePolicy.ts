import { Expose } from "class-transformer";

import { Policy } from "./Policy";

export class VehiclePolicy extends Policy {
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