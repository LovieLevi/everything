import get from "lodash/get";

export const IS_SSR = Boolean(typeof window === "undefined");

const config =
  !IS_SSR && (window as any).CONFIG ? (window as any).CONFIG || {} : {};
const env = import.meta.env || {};

function getConfig<T>(key: string, defaultValue: T): T {
  return get(config, key, get(env, key, defaultValue));
}

export const API_URL = getConfig<string>("API_URL", "/api");
export const DOMAIN = getConfig<string>("DOMAIN", "127.0.0.1:3000");
export const ENVIRONMENT = getConfig<string>("ENVIRONMENT", "development");
export const IS_DEV = ENVIRONMENT === "development";
export const IS_SSL = getConfig<string>("IS_SSL", "false") === "true";
export const VERSION = getConfig<string>("VERSION", "dev");

export const API_AUTH_URL = getConfig<string>("API_AB_URL", `${API_URL}/auth`);
export const GRAPHQL_URL = getConfig<string>(
  "API_GRAPHQL_URL",
  `${API_URL}/graphql/public`,
);
