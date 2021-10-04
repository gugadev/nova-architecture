import { Expose } from "class-transformer";

import { BaseModel } from "./BaseModel";

export class Building extends BaseModel {
    @Expose() policyId = -1;
    @Expose() address = "";
    @Expose() sumBuilding = 0.0;
    @Expose() sumContent = 0.0;
}
