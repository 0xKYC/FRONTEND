import { Navigate } from "react-router-dom";

import { Flow } from "redux/api/onfido/types";

export type RouteProps = {
  verified: boolean;
  children: JSX.Element;
  flow?: Flow | null;
  sanctioned?: boolean;
  minting?: boolean;
  connected?: boolean;
  discordConnected?: boolean;
  discordVerified?: boolean | null | undefined;
};
const RedirectRoute = ({
  verified,
  children,
  sanctioned,
  minting,
  connected,
  discordConnected,
  discordVerified,
  flow,
}: RouteProps) => {
  if (verified) {
    return <Navigate to="/profile" replace />;
  } else if (sanctioned) {
    return <Navigate to="/verification-error" replace />;
  } else if (minting) {
    return <Navigate to="/mint" replace />;
  } else if (flow === "sunscreen") {
    return <Navigate to="/uniqueness" replace />;
  } else if (flow === "sanctionsCheck") {
    return <Navigate to="/0xkyc" replace />;
  } else if (discordVerified) {
    return <Navigate to="/discord-servers" replace />;
  } else if (discordConnected) {
    return <Navigate to="/sunscreen" replace />;
  }

  return children;
};

export default RedirectRoute;
