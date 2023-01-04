import { Navigate } from "react-router-dom";
import { RouteProps } from "./RedirectRoute";

const ProtectedRoute = ({ verified, children }: RouteProps) => {
  if (!verified) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
