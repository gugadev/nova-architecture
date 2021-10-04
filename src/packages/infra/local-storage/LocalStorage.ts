import { injectable } from "tsyringe";
import { IStorage } from "packages/infra/local-storage/IStorage";

@injectable()
export class LocalStorage implements IStorage {
    get<T>(key: string): T {
        const value = localStorage.getItem(key);
        if (value) {
            return value as unknown as T;
        }
        throw new Error("No value found");
    }

    set(key: string, value: Record<string, any>): void {
        localStorage.setItem(key, JSON.stringify(value));
    }
}
