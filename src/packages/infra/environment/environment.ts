export class Environment {
    static string(varName: string, defaultValue = ""): string {
        const value = process.env[`REACT_APP_${varName}`];
        return value ?? defaultValue;
    }

    static int(varName: string, defaultValue = 0): number {
        const value = process.env[`REACT_APP_${varName}`];
        if (value) {
            return Number.parseInt(value, 10);
        }
        return defaultValue;
    }

    static float(varName: string, defaultValue = 0.0): number {
        const value = process.env[`REACT_APP_${varName}`];
        if (value) {
            return Number.parseFloat(value);
        }
        return defaultValue;
    }

    static bool(varName: string, defaultValue = false): boolean {
        const value = process.env[`REACT_APP_${varName}`];
        if (value) {
            return value === "on" || value === "true";
        }
        return defaultValue;
    }
}
