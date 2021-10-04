import { Expose, Type } from "class-transformer";

import { Dependent } from "./Dependent";
import { Policy } from "./Policy";

export class HealthPolicy extends Policy {
    @Expose() codPlan = "";

    @Expose() revPlan = "";

    @Expose() status = "";

    @Expose()
    @Type(() => Dependent)
    dependents?: Dependent[];
}
