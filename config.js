import { urlCombiner } from "./helpers/utils";

export const ENCRYPTION_KEY = process.env.NEXT_PUBLIC_ENV_ENCRYPTION_KEY;

let env = "development";

if (typeof window !== "undefined") {
  const host = window.location.host;
  if (host.includes("velo-test-admin-panel.azurewebsites.net")) {
    env = "staging";
  } else if (host.includes("velo-dev-admin-panel.azurewebsites.net")) {
    env = "development";
  } else {
    env = "production";
  }
}

const config = {
  development: {
    baseUrl: urlCombiner("velo-dev-admin-panel.azurewebsites.net"),
    api: {
      baseUrl: urlCombiner("velo-dev-api-gateway.azurewebsites.net/v1/"),
    },
    socket: urlCombiner("velo-dev-user-service.blacksky-c35f8b24.eastus.azurecontainerapps.io"),
  },
  staging: {
    baseUrl: urlCombiner("velo-test-admin-panel.azurewebsites.net"),
    api: {
      baseUrl: urlCombiner("velo-test-api-gateway.azurewebsites.net/v1/"),
    },
    socket: urlCombiner("velo-test-user-service.blueflower-5186a07a.eastus.azurecontainerapps.io"),
  },
  production: {
    baseUrl: urlCombiner("velo-prod-admin-panel.azurewebsites.net"),
    api: {
      baseUrl: urlCombiner("velo-prod-api-gateway.azurewebsites.net/v1/"),
    },
    socket: urlCombiner("velo-prod-user-service.blueflower-5186a07a.eastus.azurecontainerapps.io"),
  },
};

const configBasedOnEnv = config[env] ? config[env] : config.development;

export default configBasedOnEnv;
