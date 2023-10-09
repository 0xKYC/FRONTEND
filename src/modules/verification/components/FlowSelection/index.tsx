import { useNavigate } from "react-router-dom";

import { TosModalNormal } from "core/UI/Modals/TosModal/NormalSign";
import { useMediaQuery } from "core/hooks/useMediaQuery";
import { Flow } from "redux/api/onfido/types";
import { selectIsTosSigned } from "redux/features/modal/tosSlice";
import { setFlow } from "redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import { CardsDesktop, CardsMobile } from "./Cards";

export const FlowSelection = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isMobile = useMediaQuery("(max-width:1024px)");
  const tosAccepted = useAppSelector(selectIsTosSigned);

  const handleFlowSelect = (flow: Flow, redirectUrl: string) => {
    dispatch(setFlow(flow));
    navigate(`/${redirectUrl}`);
  };

  return (
    <>
      {!tosAccepted && <TosModalNormal />}
      {isMobile ? (
        <CardsMobile handleFlowSelect={handleFlowSelect} />
      ) : (
        <CardsDesktop handleFlowSelect={handleFlowSelect} />
      )}
    </>
  );
};
