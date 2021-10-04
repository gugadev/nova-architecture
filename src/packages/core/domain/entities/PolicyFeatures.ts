/* eslint-disable lines-between-class-members */
import { Expose } from "class-transformer";

import { BaseModel } from "./BaseModel";

export class ProductFeatures extends BaseModel {
    @Expose() carWorkshops = false;

    @Expose() clinics = false;

    @Expose() downloadPolicies = false;

    @Expose() infoCovid = false;

    @Expose() medicationDelivery = false;

    @Expose() travelAssistance = false;

    @Expose() vehicleAssistance = false;
}
