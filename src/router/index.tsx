import { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { Styles } from "../styles/styles";
import { ScrollToTop } from "../common/Scroll";

import {
  About,
  Home,
  Profile,
  PrivacyPolicy,
  TermsOfService,
  Wave,
  Mint,
  Error,
} from "./pages";
import { useAuth } from "../common/hooks/useAuth";
import ProtectedRoute from "./ProtectedRoute";
import RedirectRoute from "./RedirectRoute";

const Router = () => {
  const { verified, isLoading, isSanctioned } = useAuth();

  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Styles />
        <Header />
        <ScrollToTop />
        <div className="wave_container">
          <Routes>
            <Route
              element={
                <RedirectRoute verified={verified} sanctioned={isSanctioned}>
                  <Home isLoading={isLoading} />
                </RedirectRoute>
              }
              path="/"
            />
            <Route
              element={
                <RedirectRoute verified={verified} sanctioned={isSanctioned}>
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
            <Route element={<PrivacyPolicy />} path="/privacy-policy" />
            <Route element={<TermsOfService />} path="/terms-of-service" />
            <Route element={<Error />} path="/error" />
          </Routes>
          <Wave />
        </div>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
