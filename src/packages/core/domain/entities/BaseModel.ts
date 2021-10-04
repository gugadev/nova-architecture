import { classToPlain, plainToClass } from "class-transformer";

export class BaseModel {
    static fromJson<T extends BaseModel>(json: Record<string, any>): T {
        return plainToClass(this, json) as T;
    }

    toJson(): Record<string, any> {
        return classToPlain(this);
    }
}
