import { matchRoutes, useLocation } from "react-router-dom";

const routes = [
  { path: "/sunscreen/*" },
  { path: "/discord-servers" },
  { path: "/discord-verification" },
];

export const useCurrentPath = () => {
  const location = useLocation();
  const currentPath = matchRoutes(routes, location);

  if (!currentPath) {
    return null;
  }

  return currentPath[0].pathname;
};
