export interface ILocalStorage {
    get<T>(key: string): T;
    set(key: string, value: Record<string, any>): void;
}
