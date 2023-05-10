import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import Container from "common/Container";
import Content from "components/Content";
import { addMockedWalletAddress } from "redux/features/user/userSlice";
import { useAppDispatch } from "redux/hooks";

import { LoadingSpinner } from "../../common/LoadingSpinner";
import IntroContent from "../../content/IntroContent.json";
import VerifyContent from "../../content/VerifyContent.json";

const PartnersWithoutWalletConnection = ({
  isLoading,
}: {
  isLoading: boolean;
}) => {
  const { partner } = useParams();
  console.log(partner);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const address = searchParams.get("walletAddress");
  const url = searchParams.get("redirectUrl");
  const dispatch = useAppDispatch();
  console.log(address, url);

  // add wallet address to the store

  useEffect(() => {
    if (address) {
      dispatch(addMockedWalletAddress(address));
    }
  }, [address, dispatch]);
  // check / sign tos

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
