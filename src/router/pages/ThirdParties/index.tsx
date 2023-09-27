import TextContainer from "core/UI/TextContainer";

const ThirdParties = () => {
  return (
    <TextContainer title="Third Parties">
      <p>
        By continuing to use this service, you agree you have read, understand
        and accept{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://onfido.com/facial-scan-policy-and-release/"
        >
          Onfido Facial Scan Policy and Release
        </a>
        ,{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://onfido.com/privacy/"
        >
          Privacy Policy
        </a>{" "}
        and{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://onfido.com/terms-of-service/"
        >
          Terms Of Service
        </a>{" "}
        as well as 0xKYC{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://app.0xkyc.id/terms-of-service"
        >
          Terms Of Service
        </a>{" "}
        and{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://app.0xkyc.id/privacy-policy"
        >
          Privacy Policy
        </a>
        .
      </p>
    </TextContainer>
  );
};

export default ThirdParties;
