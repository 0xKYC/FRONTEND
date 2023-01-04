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
  Documentation,
  PrivacyPolicy,
  TermsOfService,
  Wave,
} from "./pages";
import { useAuth } from "../common/hooks/useAuth";
import ProtectedRoute from "./ProtectedRoute";
import RedirectRoute from "./RedirectRoute";

const Router = () => {
  const { isAuth } = useAuth();

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
                <RedirectRoute verified={isAuth}>
                  <Home />
                </RedirectRoute>
              }
              path="/"
            />
            <Route
              element={
                <RedirectRoute verified={isAuth}>
                  <Home />
                </RedirectRoute>
              }
              path="*"
            />
            <Route
              element={
                <ProtectedRoute verified={isAuth}>
                  <Profile />
                </ProtectedRoute>
              }
              path="/profile"
            />
            <Route element={<About />} path="/about" />
            <Route element={<Documentation />} path="/documentation" />
            <Route element={<PrivacyPolicy />} path="/privacy-policy" />
            <Route element={<TermsOfService />} path="/terms-of-service" />
          </Routes>
          <Wave />
        </div>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
