import { Navigate } from "react-router-dom";

export interface RouteProps {
  verified: boolean;
  children: JSX.Element;
}
const RedirectRoute = ({ verified, children }: RouteProps) => {
  if (verified) {
    return <Navigate to="/profile" replace />;
  }

  return children;
};

export default RedirectRoute;
