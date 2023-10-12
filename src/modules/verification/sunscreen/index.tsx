import { Fade } from "react-awesome-reveal";

import { Col, Row } from "antd";
import { ENV } from "env";

import tosContent from "content/TermsOfService.json";
import verifyContent from "content/VerifyContent.json";
import { DiscordButton } from "core/UI/Button/styles";
import { InformationCard } from "core/UI/InformationCard/InformationCard";
import { LoadingCircle } from "core/UI/Spinner";
import { DiscordUserObject } from "redux/api/user/types";
import { toggleTosModal } from "redux/features/modal/tosSlice";
import { useAppDispatch } from "redux/hooks";

import { CommonSection } from "../components/CommonSection";
import { useHandleOnfidoRedirect } from "../hooks/useHandleOnfidoRedirect";
import { StyledSection } from "./styles";

type Props = {
  userData: DiscordUserObject | undefined;
};
const { biometrics, title } = verifyContent;
const { version } = tosContent;

const SuncreenVerification = ({ userData }: Props) => {
  // const params = useParams();
  // const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);
  // const accessToken = searchParams.get("accessToken");
  // const discordId = searchParams.get("discordId");
  // console.log(accessToken);
  // console.log(discordId);
  const { handleOnfidoRedirectForDiscord, isLoading } =
    useHandleOnfidoRedirect();
  const dispatch = useAppDispatch();

  const handleDiscordConnect = () => {
    window.location.href = ENV.REACT_APP_DISCORD_REDIRECT_URL;
  };

  const onfidoRedirect = async () => {
    if (userData?.discordAccount.tosVersion !== version) {
      dispatch(toggleTosModal(true));
    } else {
      await handleOnfidoRedirectForDiscord(
        userData.discordAccount.onfidoApplicantId,
        userData.discordAccount.accountId,
      );
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
                  <DiscordButton onClick={onfidoRedirect}>
                    {isLoading ? <LoadingCircle /> : "Verify yourself"}
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
