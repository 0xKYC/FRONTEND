import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import Container from "common/Container";
import Content from "components/Content";
import { addMockedWalletAddress, setRedirectUrl } from "redux/features/user/userSlice";
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
  const address = searchParams.get("wallet-address");
  const redirectUrl = searchParams.get("redirect-url");

  useEffect(() => {
    if (!address || !redirectUrl) {
      navigate("/");
    } else {
      dispatch(addMockedWalletAddress(address));
      dispatch(setRedirectUrl(redirectUrl));
    }
  }, [address, navigate, redirectUrl, dispatch]);

  console.log(address, redirectUrl);

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
