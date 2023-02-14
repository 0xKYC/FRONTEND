import { Navigate } from "react-router-dom";

export interface RouteProps {
  verified: boolean;
  sanctioned?: boolean;
  minting?: boolean;
  children: JSX.Element;
}
const RedirectRoute = ({
  verified,
  children,
  sanctioned,
  minting,
}: RouteProps) => {
  if (verified) {
    return <Navigate to="/profile" replace />;
  } else if (sanctioned) {
    return <Navigate to="/error" replace />;
  } else if (minting) {
    return <Navigate to="/mint" replace />;
  }

  return children;
};

export default RedirectRoute;
