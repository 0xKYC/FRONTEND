import { lazy } from "react";

export const Home = lazy(() => import("../pages/Home"));
export const Profile = lazy(() => import("../pages/Profile"));
export const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
export const TermsOfService = lazy(() => import("../pages/TermsOfService"));
export const About = lazy(() => import("../pages/About"));
export const Wave = lazy(() => import("../components/Wave/index"));
