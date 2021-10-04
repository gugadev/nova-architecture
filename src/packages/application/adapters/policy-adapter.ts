import { injectable } from "inversify";

import { AutosProducts, EPSProducts, HealthProducts, SOATProducts } from "packages/application/constants/product-codes";
import { ProductCategories } from "packages/application/constants/product-categories";
import { Policy } from "packages/core/domain/entities/Policy";
import { HealthPolicy } from "packages/core/domain/entities/HealthPolicy";
import { VehiclePolicy } from "packages/core/domain/entities/VehiclePolicy";
import { HouseholdPolicy } from "packages/core/domain/entities/HouseholdPolicy";
import { SoatPolicy } from "packages/core/domain/entities/SoatPolicy";
import { EpsPlan } from "packages/core/domain/entities/EpsPlan";
import { IPolicyAdapter } from "packages/application/adapters/IPolicyAdapter";

@injectable()
export class PolicyAdapter implements IPolicyAdapter {

    private turnIntoPgaFormat(rawPolicy: Record<string, any>): Record<string, any> {
        if (Object.values(HealthProducts).includes(rawPolicy.productCode)) {
            const product = {
                category: ProductCategories.SALUD,
                code: rawPolicy.productCode,
                description: rawPolicy.product,
                systemCode: rawPolicy.systemCode,
            };
            return {
                id: rawPolicy.policyId,
                number: rawPolicy.number,
                currency: rawPolicy.currency,
                insuredRole: rawPolicy.insuredRole,
                status: rawPolicy.status,
                codPlan: rawPolicy.codPlan,
                revPlan: rawPolicy.revPlan,
                validityStart: rawPolicy.beginDate,
                validityEnd: rawPolicy.expirationDate,
                displayPayments: rawPolicy.displayPayments,
                productFeatures: rawPolicy.productFeatures,
                displayInfo: true,
                product,
            };
        }
        if (Object.values(AutosProducts).includes(rawPolicy.productCode)) {
            const product = {
                category: ProductCategories.AUTOS,
                code: rawPolicy.productCode,
                description: rawPolicy.offer.description,
                systemCode: rawPolicy.systemCode,
            };
            return {
                id: rawPolicy.id,
                number: rawPolicy.number,
                currency: rawPolicy.currency,
                insuredRole: rawPolicy.insuredRole,
                validityStart: rawPolicy.validityStart,
                validityEnd: rawPolicy.validityEnd,
                displayPayments: rawPolicy.displayPayments,
                displayInfo: rawPolicy.displayInfo,
                displayCarRepairShops: rawPolicy.displayCarRepairShops,
                status: rawPolicy.status,
                offer: rawPolicy.offer,
                productFeatures: rawPolicy.productFeatures,
                product,
            };
        }
        if (Object.values(SOATProducts).includes(rawPolicy.productCode)) {
            const product = {
                category: ProductCategories.SOAT,
                code: rawPolicy.productCode,
                description: "SOAT Tradicional",
                systemCode: rawPolicy.product.systemCode,
            };
            return {
                id: rawPolicy.id,
                number: rawPolicy.number,
                currency: rawPolicy.currency,
                insuredRole: "CONTRACTOR",
                validityStart: rawPolicy.validityStart,
                validityEnd: rawPolicy.validityEnd,
                displayPayments: false,
                displayInfo: true,
                status: rawPolicy.status,
                productFeatures: rawPolicy.productFeatures,
                product,
            };
        }
        if (Object.values(EPSProducts).includes(rawPolicy.product.code)) {
            const product = {
                category: ProductCategories.SALUD,
                code: rawPolicy.product.code,
                description: rawPolicy.product.description,
                systemCode: rawPolicy.systemCode,
            };
            return {
                id: 0,
                insuredCode: rawPolicy.insuredCode,
                affiliateCode: rawPolicy.affiliateCode,
                contractorId: rawPolicy.contractorId,
                description: rawPolicy.description,
                validityStart: rawPolicy.startValidity,
                validityEnd: rawPolicy.startValidity,
                number: rawPolicy.number,
                currency: rawPolicy.currency,
                insuredRole: "CONTRACTOR",
                insuredAmount: rawPolicy.insuredAmount,
                statusRegister: rawPolicy.statusRegister,
                statusPlan: rawPolicy.statusPlan,
                displayInfo: true,
                displayPayments: false,
                productFeatures: rawPolicy.productFeatures,
                product,
            };
        }
        return rawPolicy as Policy;
    };
    
    
    turnIntoModel<T extends Policy>(rawPolicy: Record<string, any>): T {
        const formattedPolicy = this.turnIntoPgaFormat(rawPolicy);
        switch (formattedPolicy.product.category) {
            case ProductCategories.SALUD: return HealthPolicy.fromJson(formattedPolicy);
            case ProductCategories.AUTOS: return VehiclePolicy.fromJson(formattedPolicy);
            case ProductCategories.SOAT: return SoatPolicy.fromJson(formattedPolicy);
            case ProductCategories.VIDA: return VehiclePolicy.fromJson(formattedPolicy);
            case ProductCategories.HIPOTECARIO: return HouseholdPolicy.fromJson(formattedPolicy);
            case ProductCategories.HOGAR: return HouseholdPolicy.fromJson(formattedPolicy);
            case ProductCategories.SALUD && (Object.values(EPSProducts).includes(formattedPolicy.product.code)): return EpsPlan.fromJson(formattedPolicy);
            default: return Policy.fromJson(formattedPolicy);
        }
    }
}