import React, { FC } from "react";

import { Policy } from "packages/core/domain/entities/Policy";
import { HealthPolicy } from "packages/core/domain/entities/HealthPolicy";
import { VehiclePolicy } from "packages/core/domain/entities/VehiclePolicy";
import { EpsPlan } from "packages/core/domain/entities/EpsPlan";

type Props = {
    pgaPolicies: Array<Policy>;
    plans?: Array<EpsPlan>;
    healthPolicies?: Array<HealthPolicy>;
    vehiclePolicies?: Array<VehiclePolicy>;
}

export const Home: FC<Props> = ({ pgaPolicies }) => {
    return (
        <div>
            <h1>Pga Policies</h1>
            <br />
            <ul>
                {
                    pgaPolicies.map(policy => (
                        <li key={policy.id}>{policy.number} - {policy.product.category}</li>
                    ))
                }
            </ul>
        </div>
    );
};