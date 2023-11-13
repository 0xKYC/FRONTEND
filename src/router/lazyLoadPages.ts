import { lazy } from "react";

export const Home = lazy(() => import("./pages/Homepage"));
export const HomeWithoutWalletConnection = lazy(
  () => import("./pages/CustomVerification"),
);
export const Sunscreen = lazy(() => import("./pages/Sunscreen"));
export const SunscreenWeb3 = lazy(() => import("./pages/Sunscreen/web3"));
export const SanctionsCheck = lazy(() => import("./pages/0xKYC"));
export const Profile = lazy(() => import("./pages/Profile"));
export const TermsOfService = lazy(() => import("./pages/TermsOfService"));
export const DiscordServers = lazy(() => import("./pages/DiscordServers"));
export const DiscordBot = lazy(() => import("./pages/DiscordBot"));
export const InsertStonks = lazy(() => import("./pages/InsertStonks"));
export const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
export const Tutorials = lazy(() => import("./pages/Tutorials"));

export const About = lazy(() => import("./pages/About"));
export const Mint = lazy(() => import("./pages/Mint"));
export const DiscordVerification = lazy(
  () => import("./pages/DiscordVerification"),
);
export const Error = lazy(() => import("./pages/Error"));
export const BlackListError = lazy(() => import("./pages/BlackListError"));
export const Wave = lazy(() => import("../core/UI/Layout/Footer/FooterWave"));
