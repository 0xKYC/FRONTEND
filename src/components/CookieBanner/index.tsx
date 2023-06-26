import { useRef } from "react";
import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";

import { CloseOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const CookieBanner = () => {
  const cookieConsentRef = useRef<any>();

  const declineCookies = () => {
    cookieConsentRef?.current?.decline();
  };
  return (
    <CookieConsent
      ref={cookieConsentRef}
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
        padding: ".5rem 1rem",
        background: "#fb7324",
        color: "white",
        fontSize: "1rem",
        borderRadius: "0.4rem",
        fontWeight: "bold",
        fontFamily: "Motiva Sans Light",
        marginRight: "2rem",
      }}
    >
      <StyledBtn onClick={declineCookies}>
        <CloseOutlined />
      </StyledBtn>
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
  color: #62b5e6;
  transition: all 0.3s;
  &:hover {
    color: #79bde4;
  }
`;

const StyledBtn = styled("button")`
  position: absolute;
  top: 1%;
  right: 0;
  background: inherit;
  border: none;
  cursor: pointer;
  /* padding: 0; */
`;
