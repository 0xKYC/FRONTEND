import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import Container from "common/Container";
import Content from "components/Content";
import { setPartnerParams } from "redux/features/user/userSlice";
import { useAppDispatch } from "redux/hooks";

import { LoadingSpinner } from "../../common/LoadingSpinner";
import IntroContent from "../../content/IntroContent.json";
import VerifyContent from "../../content/VerifyContent.json";

const PartnersWithoutWalletConnection = ({ isLoading }: { isLoading: boolean }) => {
  const { partner } = useParams();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const address = searchParams.get("walletAddress");
  const redirectUrl = searchParams.get("redirectUrl");
  const callbackUrl = searchParams.get("callbackUrl");

  useEffect(() => {
    if (!address || !redirectUrl || !callbackUrl) {
      navigate("/");
    } else {
      dispatch(
        setPartnerParams({
          mockedWalletAddress: address,
          callbackUrl,
          redirectUrl,
        }),
      );
    }
  }, [address, navigate, redirectUrl, dispatch, callbackUrl]);

  if (isLoading) return <LoadingSpinner tip="Loading..." height="90vh" />;

  return (
    <Container>
      <Content
        type="right"
        button={IntroContent.button}
        verifyTitle={VerifyContent.title}
        verifyText={VerifyContent.content}
        icon="developer.svg"
      />
    </Container>
  );
};

export default PartnersWithoutWalletConnection;
