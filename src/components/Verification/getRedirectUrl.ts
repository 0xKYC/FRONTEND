import { ENV } from "env";

export const getRedirectUrl = (): string => {
  const redirectUrls = {
    local: "http://localhost:3000/",
    dev: "https://dev.0xkyc.id/",
    sandbox: "https://sandbox.0xkyc.id/",
    stage: "https://stage.0xkyc.id/",
    prod: "https://app.0xkyc.id/",
  };
  const redirectUrl: string =
    redirectUrls[ENV.REACT_APP_ENVIRONMENT] || redirectUrls.dev;

  return redirectUrl;
};
