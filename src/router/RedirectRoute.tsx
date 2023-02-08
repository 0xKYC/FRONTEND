import { Navigate } from "react-router-dom";

export interface RouteProps {
  verified: boolean;
  sanctioned?: boolean;
  children: JSX.Element;
}
const RedirectRoute = ({ verified, children, sanctioned }: RouteProps) => {
  if (verified) {
    return <Navigate to="/profile" replace />;
  } else if (sanctioned) {
    return <Navigate to="/error" replace />;
  }

  return children;
};

export default RedirectRoute;
