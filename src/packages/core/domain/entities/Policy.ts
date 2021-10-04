import { Expose, Type } from "class-transformer";

import { BaseModel } from "./BaseModel";
import { Insured } from "./Insured";
import { PaymentSummary } from "./PaymentSummary";
import { ProductFeatures } from "./PolicyFeatures";
import { PolicyProduct } from "./PolicyProduct";

export abstract class Policy extends BaseModel {
    @Expose() id = 0;

    @Expose() number = 0;

    @Expose() currency = "";

    @Expose() insuredRole = "";

    @Expose() displayPayments = false;

    @Expose() displayInfo = false;

    @Expose() validityStart = "";

    @Expose() validityEnd = "";

    @Expose() status?: string | undefined;

    @Expose() insureds?: Insured[] | undefined;

    @Expose()
    @Type(() => PolicyProduct)
    product: PolicyProduct = new PolicyProduct();

    @Expose()
    @Type(() => PaymentSummary)
    paymentSummary?: PaymentSummary | undefined;

    @Expose()
    @Type(() => ProductFeatures)
    productFeatures: ProductFeatures | undefined;

    get longId(): string {
        return `${this.product.systemCode}-${this.id || this.number}`;
    }
}
