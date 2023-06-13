import TextContainer from "common/TextContainer";

const ThirdParties = () => {
  return (
    <TextContainer title="Third Parties">
      <p>
        By continuing to use this service, you agree you have read, understand
        and accept{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="router/pages/ThirdParties/index"
        >
          Onfido Facial Scan Policy and Release
        </a>
        ,{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="router/pages/ThirdParties/index"
        >
          Privacy Policy
        </a>{" "}
        and{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="router/pages/ThirdParties/index"
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
