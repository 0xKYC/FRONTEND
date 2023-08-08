import { lazy } from "react";

export const Home = lazy(() => import("./pages/Verification"));
export const HomeWithoutWalletConnection = lazy(
  () => import("./pages/CustomVerification"),
);
export const Profile = lazy(() => import("./pages/Profile"));
export const TermsOfService = lazy(() => import("./pages/TermsOfService"));
export const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
export const ThirdParties = lazy(() => import("./pages/ThirdParties"));
export const About = lazy(() => import("./pages/About"));
export const Mint = lazy(() => import("./pages/Mint"));
export const Error = lazy(() => import("./pages/Error"));
export const Wave = lazy(() => import("../core/UI/Layout/Footer/FooterWave"));
