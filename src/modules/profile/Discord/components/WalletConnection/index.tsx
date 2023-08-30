import { Button } from "core/UI/Button";
import { useMediaQuery } from "core/hooks/useMediaQuery";
import styled from "styled-components";

import { Info } from "../../styles";
import { useConnectWallet } from "./useConnectWallet";

export const WalletConnection = () => {
  const isMobile = useMediaQuery("(max-width:990px)");

  return (
    <Box isMobile={isMobile}>
      <WalletConnectionContent />
    </Box>
  );
};

export const MobileWalletConnection = () => {
  const isMobile = useMediaQuery("(max-width:990px)");

  return (
    <MobileBox isMobile={isMobile}>
      <WalletConnectionContent />
    </MobileBox>
  );
};

const WalletConnectionContent = () => {
  const { address, isConnected, handleConnectWallet } = useConnectWallet();
  return (
    <>
      {!isConnected && (
        <Info>
          Conntect your wallet to receive token drop in the near future!
        </Info>
      )}
      <Button onClick={handleConnectWallet}>
        {address ? `Disconnect ...${address.slice(-6)}` : "Connect Wallet"}
      </Button>
    </>
  );
};

const MobileBox = styled.div<{ isMobile: boolean }>`
  display: ${(props) => (props.isMobile ? "block" : "none")};
  margin-top: 1rem;
`;
const Box = styled.div<{ isMobile: boolean }>`
  display: ${(props) => (props.isMobile ? "none" : "block")};
`;
