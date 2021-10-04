/* eslint-disable lines-between-class-members */
import { Expose } from "class-transformer";

import { BaseModel } from "./BaseModel";
import { DebitMembership } from "./DebitMembership";
import { Coupon } from "./PaymentCoupon";

export class PaymentSummary extends BaseModel {
    @Expose() allowPaymentSplit?: boolean;
    @Expose() policyId?: number;
    @Expose() debitMembership?: DebitMembership | null;
    @Expose() coupons?: Coupon[];
}
