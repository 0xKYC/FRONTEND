import { Result } from "antd";

import { Container, StyledBox } from "./styled";

import { useMint } from "./useMint";
import { LoadingSpinner } from "../../common/LoadingSpinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";
import {
  selectIsMintingError,
  selectMintingChain,
} from "../../redux/features/user/userSlice";
import { useNetwork } from "wagmi";

export const MintContent = () => {
  const { error } = useMint();
  const navigate = useNavigate();
  const mintingChain = useAppSelector(selectMintingChain);
  const { chain } = useNetwork();
  const isMintingError = useAppSelector(selectIsMintingError);

  useEffect(() => {
    if (!isMintingError && mintingChain !== chain?.id) {
      navigate("/");
    }
  }, [navigate, chain?.id, mintingChain, isMintingError]);

  return (
    <Container>
      {error ? (
        <Result
          status="warning"
          title="It took longer than expected. Please refresh the page or come back again later."
        />
      ) : (
        <StyledBox>
          <LoadingSpinner
            tip="Please wait a few moments, you will be automatically redirected."
            width="300px"
          />
        </StyledBox>
      )}
    </Container>
  );
};
