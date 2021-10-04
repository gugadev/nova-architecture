export type Options = {
    baseUrl?: string;
    contentType?: string;
    params?: { [key: string]: string };
    query?: { [key: string]: string };
    token: string;
};

export interface IHttpProvider {
    get<T>(path: string, options: Options): Promise<T>;
    post<T>(
        path: string,
        data: Record<string, any>,
        options: Options
    ): Promise<T>;
}
