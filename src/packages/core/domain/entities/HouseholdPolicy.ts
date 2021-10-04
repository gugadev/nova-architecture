import { Expose, Type } from "class-transformer";

import { Building } from "./Building";
import { Policy } from "./Policy";

export class HouseholdPolicy extends Policy {
    @Expose()
    @Type(() => Building)
    buildings: Building[] = [];
}
