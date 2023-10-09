import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

import { Col, Row } from "antd";
import { useAccount } from "wagmi";

import { Button } from "core/UI/Button";
import { InformationCard } from "core/UI/InformationCard/InformationCard";
import { TosModalNormal } from "core/UI/Modals/TosModal/NormalSign";
import { LoadingCircle } from "core/UI/Spinner";
import { toggleConnectorsModal } from "redux/features/connection/connectionSlice";
import { useAppDispatch } from "redux/hooks";

import { CommonSection } from "../components/CommonSection";
import { EmailForm } from "../components/EmailForm";
import { GoBackArrow } from "../components/GoBackArrow";
import { useHandleOnfidoRedirect } from "../hooks/useHandleOnfidoRedirect";
import { HomePageProps } from "../types";
import { CustomSectionWrapper } from "./styles";

const VerificationProcess = ({
  title,
  verifyText,
  verifyTitle,
  content,
  button,
  uniqueness,
  flow,
}: HomePageProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isEmailSubmitted, setEmailSubmitted] = useState(false);

  const { handleOnfidoRedirect, tosAccepted, isLoading } =
    useHandleOnfidoRedirect();

  const { isConnected } = useAccount();

  const handleConnectWallet = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(toggleConnectorsModal());
    event.currentTarget.blur();
  };

  const handleNextStep = () => {
    setEmailSubmitted(true);
  };

  const handleStepBack = () => {
    setEmailSubmitted(false);
  };
  const onfidoRedirect = async () => {
    await handleOnfidoRedirect(flow);
  };

  const goToFlowSelect = () => {
    navigate("/");
  };
  return (
    <CustomSectionWrapper>
      {!tosAccepted && <TosModalNormal />}
      <Fade>
        <Row justify="space-around" align="middle">
          <Col lg={11} md={11} sm={24} xs={24}>
            {!isConnected && (
              <CommonSection header={title} contentText={content}>
                <GoBackArrow
                  text="Change the flow"
                  handleStepBack={goToFlowSelect}
                />
                <Button onClick={handleConnectWallet}>
                  {button?.disabled.title}
                </Button>
              </CommonSection>
            )}

            {isConnected && !isEmailSubmitted && (
              <CommonSection
                marginBottom={1}
                header="Please provide your email address"
                contentText="We use it to inform you about the details of your verification"
              >
                <GoBackArrow
                  text="Change the flow"
                  handleStepBack={goToFlowSelect}
                />
                <EmailForm handleNextStep={handleNextStep} />
              </CommonSection>
            )}

            {isConnected && isEmailSubmitted && (
              <CommonSection header={verifyTitle} contentText={verifyText}>
                <GoBackArrow
                  text="Go back to email form"
                  handleStepBack={handleStepBack}
                />
                <Button onClick={onfidoRedirect}>
                  {isLoading ? <LoadingCircle /> : button?.enabled.title}
                </Button>
              </CommonSection>
            )}
          </Col>
          <Col lg={11} md={11} sm={24} xs={24}>
            <InformationCard isUniquenessFlow={uniqueness} />
          </Col>
        </Row>
      </Fade>
    </CustomSectionWrapper>
  );
};

export default VerificationProcess;
