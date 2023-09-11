import { Navigate } from "react-router-dom";

export type RouteProps = {
  verified: boolean;
  sanctioned?: boolean;
  minting?: boolean;
  connected?: boolean;
  discordConnected?: boolean;
  children: JSX.Element;
};
const RedirectRoute = ({
  verified,
  children,
  sanctioned,
  minting,
  connected,
  discordConnected,
}: RouteProps) => {
  if (verified) {
    return <Navigate to="/profile" replace />;
  } else if (sanctioned) {
    return <Navigate to="/error" replace />;
  } else if (minting) {
    return <Navigate to="/mint" replace />;
  } else if (connected) {
    return <Navigate to="/0xkyc" replace />;
  } else if (discordConnected) {
    return <Navigate to="/sunscreen" replace />;
  }

  return children;
};

export default RedirectRoute;
