import { lazy } from "react";

export const Home = lazy(() => import("../pages/Home"));
export const HomeWithoutWalletConnection = lazy(
  () => import("../pages/PartnersWithoutWalletConnection"),
);
export const Profile = lazy(() => import("../pages/Profile"));
export const TermsOfService = lazy(() => import("../pages/TermsOfService"));
export const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
export const About = lazy(() => import("../pages/About"));
export const Mint = lazy(() => import("../pages/Mint"));
export const Error = lazy(() => import("../pages/Error"));
export const Wave = lazy(() => import("../components/Wave/index"));
