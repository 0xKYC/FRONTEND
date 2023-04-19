import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";
import styled from "styled-components";
export const CookieBanner = () => {
  return (
    <CookieConsent
      style={{
        position: "fixed",
        width: "96%",
        margin: "auto",
        bottom: "20px",
        borderRadius: "0.5rem",
        left: "50%",
        marginBottom: "1rem",
        transform: "translateX(-50%)",
      }}
      buttonText="Okay"
      buttonStyle={{
        background: "#fb7324",
        color: "white",
        fontSize: "1rem",
        borderRadius: "0.4rem",
        fontWeight: "bold",
        fontFamily: "Motiva Sans Light",
      }}
    >
      This website uses cookies to improve your experience. Please review our
      <StyledLink to="privacy-policy">
        {" "}
        Cookie Policy (as a part of our Privacy Policy)
      </StyledLink>{" "}
      for more information.
    </CookieConsent>
  );
};

const StyledLink = styled(Link)`
  color: #ffffffec;
  transition: all 0.3s;
  &:hover {
    color: #ffffffce;
  }
`;
