import { Expose } from "class-transformer";

import { Policy } from "./Policy";

export class LifePolicy extends Policy {
    @Expose() status = ""; // S - V
}