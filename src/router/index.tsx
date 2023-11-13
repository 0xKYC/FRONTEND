import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { CookieBanner } from "core/UI/CookieBanner";
import { Header } from "core/UI/Layout/Header";
import { Main } from "../styles/styles";
import { useScrollToTop } from "core/hooks/useScrollToTop";
import { useGetDiscordUserQuery } from "redux/api/user/userApi";

import Footer from "../core/UI/Layout/Footer";
import { LoadingSpinner } from "../core/UI/LoadingSpinner";
import { useAuth } from "../core/hooks/useAuth";
import { Styles } from "../styles/styles";
import ProtectedRoute from "./ProtectedRoute";
import RedirectRoute from "./RedirectRoute";
import {
  About,
  BlackListError,
  DiscordVerification,
  Error,
  Home,
  HomeWithoutWalletConnection,
  InsertStonks,
  Mint,
  PrivacyPolicy,
  Profile,
  SanctionsCheck,
  Sunscreen,
  SunscreenWeb3,
  TermsOfService,
  Tutorials,
  Wave,
} from "./lazyLoadPages";

export const Router = () => {
  const {
    isVerified: verified,
    isLoading,
    isSanctioned,
    isMintingActive,
    isConnected,
    flow,
  } = useAuth();
  useScrollToTop();
  const { data } = useGetDiscordUserQuery();

  return (
    <>
      <Styles />
      <Header />
      <Suspense fallback={<LoadingSpinner tip="Loading..." height="90vh" />}>
        <Main>
          <Routes>
            <Route
              element={
                <RedirectRoute
                  verified={verified}
                  sanctioned={isSanctioned}
                  connected={isConnected}
                  minting={isMintingActive}
                  // flow={flow}
                  discordConnected={Boolean(data)}
                >
                  <Home isLoading={isLoading} />
                </RedirectRoute>
              }
              path="/"
            />
            <Route
              element={
                <RedirectRoute
                  verified={verified}
                  sanctioned={isSanctioned}
                  minting={isMintingActive}
                >
                  <Sunscreen />
                </RedirectRoute>
              }
              path="/sunscreen/*"
            />
            <Route
              element={
                <RedirectRoute
                  verified={verified}
                  sanctioned={isSanctioned}
                  minting={isMintingActive}
                >
                  <SanctionsCheck isLoading={isLoading} />
                </RedirectRoute>
              }
              path="/0xkyc"
            />
            <Route
              element={
                <RedirectRoute
                  verified={verified}
                  sanctioned={isSanctioned}
                  minting={isMintingActive}
                >
                  <SunscreenWeb3 isLoading={isLoading} />
                </RedirectRoute>
              }
              path="/uniqueness"
            />
            <Route
              element={
                <RedirectRoute
                  verified={verified}
                  sanctioned={isSanctioned}
                  minting={isMintingActive}
                >
                  <HomeWithoutWalletConnection isLoading={isLoading} />
                </RedirectRoute>
              }
              path="/:partner/*"
            />
            <Route
              element={
                <RedirectRoute
                  verified={verified}
                  sanctioned={isSanctioned}
                  minting={isMintingActive}
                  connected={isConnected}
                  flow={flow}
                >
                  <Home isLoading={isLoading} />
                </RedirectRoute>
              }
              path="*"
            />
            <Route
              element={
                <ProtectedRoute verified={verified}>
                  <Profile />
                </ProtectedRoute>
              }
              path="/profile"
            />
            <Route
              element={
                <RedirectRoute verified={verified}>
                  <Mint />
                </RedirectRoute>
              }
              path="/mint"
            />
            <Route
              element={<DiscordVerification />}
              path="/discord-verification"
            />
            {/* <Route element={<DiscordServers />} path="/discord-servers" /> */}

            <Route element={<About />} path="/about" />
            <Route element={<InsertStonks />} path="/insert-stonks" />
            <Route element={<TermsOfService />} path="/terms-of-service" />
            <Route element={<Tutorials />} path="/tutorials" />
            <Route element={<PrivacyPolicy />} path="/privacy-policy" />
            <Route element={<Error />} path="/error" />
            <Route element={<BlackListError />} path="/verification-error" />
          </Routes>
        </Main>
        <CookieBanner />
        <Footer />
      </Suspense>
    </>
  );
};
