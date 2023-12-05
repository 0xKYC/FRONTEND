import { useLocation } from "react-router-dom";

import { InfoCircleOutlined } from "@ant-design/icons";
import {
  selectIsVerified,
  selectUserFlow,
} from "redux/features/user/userSlice";
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
  const flow = useAppSelector(selectUserFlow);
  return (
    <>
      <StyledText>
        {flow === "insertStonks"
          ? `Only your
        unique identifier (UUID) is shared.`
          : "No personal information is shared."}
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
