import { ENV } from "env";

export const getMetamaskUrl = () => {
  const metamaskUrl = "https://metamask.app.link/dapp/";
  const environments = {
    local: "",
    dev: "dev.0xkyc.id",
    sandbox: "sandbox.0xkyc.id",
    stage: "stage.0xkyc.id",
    prod: "app.0xkyc.id",
  };

  const dappUrl = environments[ENV.VITE_APP_ENVIRONMENT] || environments.prod;
  const metamaskAppLink = metamaskUrl + dappUrl;

  return metamaskAppLink;
};
