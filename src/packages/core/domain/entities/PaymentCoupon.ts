import { Expose } from "class-transformer";

import { BaseModel } from "./BaseModel";

export class Coupon extends BaseModel {
    @Expose() amount = 0.0;
    @Expose() correlative = 0;
    @Expose() couponsQuantity = 0;
    @Expose() currency = "";
    @Expose() expirationDate = "";
    @Expose() id = "";
    @Expose() paymentDate = "";
    @Expose() policyId = -1;
    @Expose() status = "";
    @Expose() voucherId = 0;
    @Expose() inPaymentProcessing = false;
}
