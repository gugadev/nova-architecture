import { Expose } from "class-transformer";

import { BaseModel } from "./BaseModel";

export class PolicyProduct extends BaseModel {
    @Expose() category = "";
    @Expose() code = "";
    @Expose() description = "";
    @Expose() icon = "";
    @Expose() systemCode = "";
}
