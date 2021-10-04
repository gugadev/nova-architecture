import { Expose, Type } from "class-transformer";

import { Policy } from "./Policy";
import { Vehicle } from "./Vehicle";

export class SoatPolicy extends Policy {
    @Expose()
    @Type(() => Vehicle)
    vehicle?: Vehicle;
}