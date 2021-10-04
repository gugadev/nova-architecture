import { Expose } from "class-transformer";

import { BaseModel } from "./BaseModel";

export class Afiliate extends BaseModel {
    @Expose() code = -1;

    @Expose() planNumber = -1;

    @Expose() fullName = "";

    @Expose() status = ""; // V -> vigente

    @Expose() type = ""; // T -> titular, D -> dependiente
}
