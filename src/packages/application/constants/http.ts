import { Environment } from "packages/infra/environment/environment";

export const BASE_URL = Environment.string("SERVER_URL");
