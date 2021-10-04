import { Policy } from "packages/core/domain/entities/Policy";

export interface IPolicyAdapter {
    turnIntoModel<T extends Policy>(rawPolicy: Record<string, any>): T;
}
