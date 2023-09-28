import { useNavigate } from "react-router-dom";

import { useMediaQuery } from "core/hooks/useMediaQuery";
import { Flow } from "redux/api/onfido/types";
import { setFlow } from "redux/features/user/userSlice";
import { useAppDispatch } from "redux/hooks";

import { CardsDesktop, CardsMobile } from "./Cards";

export const FlowSelection = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isMobile = useMediaQuery("(max-width:1024px)");

  const handleFlowSelect = (flow: Flow, redirectUrl: string) => {
    dispatch(setFlow(flow));
    navigate(`/${redirectUrl}`);
  };

  return (
    <>
      {isMobile ? (
        <CardsMobile handleFlowSelect={handleFlowSelect} />
      ) : (
        <CardsDesktop handleFlowSelect={handleFlowSelect} />
      )}
    </>
  );
};
