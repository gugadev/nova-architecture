import { injectable } from "inversify"
import axios, { AxiosResponse} from "axios";

import { BASE_URL } from "packages/application/constants/http"
import { IHttpProvider, Options } from "packages/infra/http/IHttpProvider";



const defaultOptions: Options = {
    baseUrl: BASE_URL,
    token: "",
    contentType: "application/json",
    params: {},
    query: {}
}

@injectable()
export class HttpProvider implements IHttpProvider {

    async get<T>(path: string, options: Options = defaultOptions): Promise<T> {
        const baseUrl = options.baseUrl ?? defaultOptions.baseUrl;
        const query = this.getQueryParams(options.query ?? {});
        const realPath = this.getPathParams(path, options.params ?? {});
        const url = `${baseUrl}${realPath}${query}`;
        const headers = this.getHeaders(options);
        return axios.get<T>(url, { headers }).then(response => response.data);
    }

    async post<T>(path: string, data: Record<string, any>, options: Options = defaultOptions): Promise<T> {
        const baseUrl = options.baseUrl ?? defaultOptions.baseUrl;
        const query = this.getQueryParams(options.query ?? {});
        const realPath = this.getPathParams(path, options.params ?? {});
        const url = `${baseUrl}${realPath}${query}`;
        const headers = this.getHeaders(options);
        return (
            axios
                .post<Record<string, any>, AxiosResponse>(url, data, { headers })
                .then(response => response.data)
        );
    }

    /** HELPER METHODS */

    private getQueryParams(queryParams: Record<string, any>): string {
        let query = "";
        for (let key in queryParams) {
            query += `${key}=${queryParams[key]}&`;
        }
        return query;
    }

    private getPathParams(path: string, params: Record<string, any>): string {
        let pathWithParams = path;
        for (let key in params) {
            pathWithParams = pathWithParams.replace(`:${key}`, params[key]);
        }
        return pathWithParams
    }

    private getHeaders(options: Options = defaultOptions): Record<string, string> {
        const headers: Record<string, string> = {};
        headers["Content-Type"] = options.contentType!;
        headers["Authorization"] = `Bearer ${options.token}`;
        return headers;
    }
}
