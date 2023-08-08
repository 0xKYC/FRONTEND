import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CookieBanner } from "core/UI/CookieBanner";

import Footer from "../core/UI/Layout/Footer";
import Header from "../core/UI/Layout/Header";
import { LoadingSpinner } from "../core/UI/LoadingSpinner";
import { useAuth } from "../core/hooks/useAuth";
import { Styles } from "../styles/styles";
import ProtectedRoute from "./ProtectedRoute";
import RedirectRoute from "./RedirectRoute";
import {
  About,
  Error,
  Home,
  HomeWithoutWalletConnection,
  Mint,
  PrivacyPolicy,
  Profile,
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
  } = useAuth();

  return (
    <BrowserRouter>
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
                  minting={isMintingActive}
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
            <Route element={<About />} path="/about" />
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
    </BrowserRouter>
  );
};
