import { Navigate } from "react-router-dom";

export type RouteProps = {
  verified: boolean;
  children: JSX.Element;
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
}: RouteProps) => {
  if (verified) {
    return <Navigate to="/profile" replace />;
  } else if (sanctioned) {
    return <Navigate to="/error" replace />;
  } else if (minting) {
    return <Navigate to="/mint" replace />;
  } else if (connected) {
    return <Navigate to="/0xkyc" replace />;
  } else if (discordVerified) {
    return <Navigate to="/discord-servers" replace />;
  } else if (discordConnected) {
    return <Navigate to="/sunscreen" replace />;
  }

  return children;
};

export default RedirectRoute;
