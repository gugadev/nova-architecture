import { Expose } from "class-transformer";

import { BaseModel } from "./BaseModel";

export class DebitMembership extends BaseModel {
    @Expose() accountNumber = "";

    @Expose() accountType = "";

    @Expose() currency = "";

    @Expose() entity = "";

    @Expose() updateDate = "";
}
