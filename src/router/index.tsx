import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CookieBanner } from "components/CookieBanner";

import { LoadingSpinner } from "../common/LoadingSpinner";
import { ScrollToTop } from "../common/Scroll";
import { useAuth } from "../common/hooks/useAuth";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Styles } from "../styles/styles";
import ProtectedRoute from "./ProtectedRoute";
import RedirectRoute from "./RedirectRoute";
import { About, Error, Home, Mint, PrivacyPolicy, Profile, TermsOfService, Wave } from "./pages";

// import { Status } from "../components/Mint/test";

const Router = () => {
  const { isVerified: verified, isLoading, isSanctioned, isMintingActive } = useAuth();

  return (
    <BrowserRouter>
      <Styles />
      <Header />
      <ScrollToTop />
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

            {/* route for testing */}
            {/* <Route
              element={
                <ProtectedRoute verified={verified}>
                  <Status />
                </ProtectedRoute>
              }
              path="/status"
            /> */}
            <Route element={<About />} path="/about" />
            <Route element={<TermsOfService />} path="/terms-of-service" />
            <Route element={<PrivacyPolicy />} path="/privacy-policy" />
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

export default Router;
