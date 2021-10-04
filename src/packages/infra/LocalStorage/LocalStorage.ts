import { injectable } from "inversify";

import { IStorage } from "./storage.interface";

@injectable()
export class LocalStorage implements IStorage {
    get<T>(key: string): T {
        const value = localStorage.getItem(key);
        if (value) {
            // return JSON.parse(value) as T;
            return value as unknown as T;
        }
        throw new Error("No value found");
    }
    
    set(key: string, value: Record<string, any>) {
        localStorage.setItem(key, JSON.stringify(value));
    }
}