import { Expose, Type } from "class-transformer";

import { Afiliate } from "./Afilliate";
import { Policy } from "./Policy";

export class EpsPlan extends Policy {
    @Expose() affiliateCode = 1;

    @Expose() insuredCode = -1;

    @Expose() contractorId = -1;

    @Expose() description = "";

    @Expose() statusRegister = ""; // V-  A

    @Expose() statusPlan = ""; // V - A

    @Expose() insuredAmount = 0.0;

    @Expose()
    @Type(() => Afiliate)
    affiliates?: Afiliate[];
}
