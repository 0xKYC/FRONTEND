import { useLocation } from "react-router-dom";

import { InfoCircleOutlined } from "@ant-design/icons";
import { selectIsVerified } from "redux/features/user/userSlice";
import { useAppSelector } from "redux/hooks";

import { StyledText } from "./styles";

export const UniquenessFlowInformation = ({
  verified,
}: {
  verified?: boolean;
}) => {
  const { pathname } = useLocation();
  const isAuth = useAppSelector(selectIsVerified);
  const isVerified = pathname === "/profile" || isAuth || verified;
  const isDiscordFlow = pathname === "/sunscreen";
  return (
    <>
      <StyledText>
        {isDiscordFlow
          ? "No personal information is shared."
          : `Only your
        unique identifier (UUID) is shared.`}
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
