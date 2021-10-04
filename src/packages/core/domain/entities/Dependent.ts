import { Expose } from "class-transformer";

import { BaseModel } from "./BaseModel";

export class Dependent extends BaseModel {
    @Expose() insuredCode = -1;

    @Expose() policyId = -1;

    @Expose() documentId = "";

    @Expose() insuredId = -1;

    @Expose() insuredType = ""; // S -> titular, N -> dependiente

    @Expose() relationship = "";

    @Expose() fullName = "";
}
