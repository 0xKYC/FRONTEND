import { useLocation } from "react-router-dom";

import { InfoCircleOutlined } from "@ant-design/icons";

import { StyledText } from "./styles";

export const UniquenessFlowInformation = () => {
  const { pathname } = useLocation();
  const isAuth = true;
  const isVerified = pathname === "/profile" || isAuth;
  return (
    <>
      <StyledText>
        Only the result of the check and your unique identifier (UUID) is
        shared.
      </StyledText>
      {!isVerified && (
        <StyledText style={{ fontWeight: "500" }}>
          <InfoCircleOutlined style={{ fontSize: "1.1rem" }} /> Troubles getting
          verified? Try a different device!
        </StyledText>
      )}
    </>
  );
};
