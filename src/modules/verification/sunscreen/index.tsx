import { Fade } from "react-awesome-reveal";

import { Col, Row } from "antd";

import verifyContent from "content/VerifyContent.json";
import { DiscordButton } from "core/UI/Button/styles";
import { InformationCard } from "core/UI/InformationCard/InformationCard";
import { toggleTosModal } from "redux/features/modal/tosSlice";
import { useAppDispatch } from "redux/hooks";

import { CommonSection } from "../components/CommonSection";
import { useHandleOnfidoRedirect } from "../hooks/useHandleOnfidoRedirect";
import { StyledSection } from "./styles";

const { biometrics, title } = verifyContent;
const SuncreenVerification = ({ userData }: { userData: any }) => {
  // const params = useParams();
  // const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);
  // const accessToken = searchParams.get("accessToken");
  // const discordId = searchParams.get("discordId");
  // console.log(accessToken);
  // console.log(discordId);
  const { handleOnfidoRedirect, tosAccepted } = useHandleOnfidoRedirect();
  const dispatch = useAppDispatch();

  const handleDiscordConnect = () => {
    if (!tosAccepted) {
      dispatch(toggleTosModal(true));
    } else {
      // window.location.href = ENV.REACT_APP_DISCORD_REDIRECT_URL;
    }
  };

  return (
    <StyledSection>
      <Fade>
        <Row justify="space-around" align="middle">
          <Col lg={11} md={18} sm={24} xs={24}>
            {userData ? (
              <>
                <CommonSection header={title} contentText={biometrics}>
                  <DiscordButton onClick={handleOnfidoRedirect}>
                    Verify yourself
                  </DiscordButton>
                </CommonSection>
              </>
            ) : (
              <>
                <CommonSection
                  header="Verify your uniqueness with our Sunscreen service"
                  contentText="Sunscreen is a verification check which prevents bots and duplicate accounts in Discord servers"
                >
                  <DiscordButton onClick={handleDiscordConnect}>
                    Connect Discord
                  </DiscordButton>
                </CommonSection>
              </>
            )}
          </Col>
          <Col lg={24} md={24} sm={24} xs={24}>
            <InformationCard margin="5rem 0 0 0" isUniquenessFlow={true} />
          </Col>
        </Row>
      </Fade>
    </StyledSection>
  );
};

export default SuncreenVerification;
