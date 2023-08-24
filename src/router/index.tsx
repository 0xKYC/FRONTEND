import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { CookieBanner } from "core/UI/CookieBanner";
import { Header } from "core/UI/Layout/Header";
import { useScrollToTop } from "core/hooks/useScrollToTop";

import Footer from "../core/UI/Layout/Footer";
import { LoadingSpinner } from "../core/UI/LoadingSpinner";
import { useAuth } from "../core/hooks/useAuth";
import { Styles } from "../styles/styles";
import ProtectedRoute from "./ProtectedRoute";
import RedirectRoute from "./RedirectRoute";
import {
  About,
  DiscordServers,
  Error,
  Home,
  HomeWithoutWalletConnection,
  InsertStonks,
  Mint,
  PrivacyPolicy,
  Profile,
  SanctionsCheck,
  Sunscreen,
  TermsOfService,
  ThirdParties,
  Wave,
} from "./lazyLoadPages";

export const Router = () => {
  const {
    isVerified: verified,
    isLoading,
    isSanctioned,
    isMintingActive,
    isConnected,
  } = useAuth();
  useScrollToTop();
  return (
    <>
      <Styles />
      <Header />
      <Suspense fallback={<LoadingSpinner tip="Loading..." height="90vh" />}>
        <div className="wave_container">
          <Routes>
            <Route
              element={
                <RedirectRoute
                  verified={verified}
                  sanctioned={isSanctioned}
                  connected={isConnected}
                  minting={isMintingActive}
                >
                  <Home />
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
              path="/sunscreen"
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
                >
                  <Home />
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
            <Route element={<About />} path="/about" />
            <Route element={<DiscordServers />} path="/discord-servers" />
            <Route element={<InsertStonks />} path="/insert-stonks" />
            <Route element={<TermsOfService />} path="/terms-of-service" />
            <Route element={<PrivacyPolicy />} path="/privacy-policy" />
            <Route element={<ThirdParties />} path="/third-parties" />
            <Route element={<Error />} path="/error" />
          </Routes>
          <Wave />
        </div>
        <CookieBanner />
        <Footer />
      </Suspense>
    </>
  );
};
