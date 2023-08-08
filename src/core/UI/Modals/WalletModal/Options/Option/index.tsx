import { useEffect } from "react";

import { Connector, useConnect } from "wagmi";

import { useMediaQuery } from "core/hooks/useMediaQuery";
import {
  closeConnectionInfoModal,
  openConnectionInfoModal,
  selectCurrentChain,
  toggleConnectorsModal,
} from "redux/features/connection/connectionSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import { InstallMetamaskOption } from "./InstallMetamask";
import { ImageBox, StyledOptionBtn, StyledOptionLink, TextBox } from "./styles";
import { getIcon } from "./utils/getIcon";
import { getMetamaskUrl } from "./utils/getMetamaskUrl";

type Props = {
  connector: Connector<any, any, any>;
};

export const Option = ({ connector }: Props) => {
  const dispatch = useAppDispatch();
  const { connect, error } = useConnect({
    onSuccess() {
      dispatch(closeConnectionInfoModal());
    },
  });

  const chainId = useAppSelector(selectCurrentChain);
  const iconUrl = getIcon(connector.id);
  const metamaskUrl = getMetamaskUrl();

  useEffect(() => {
    if (error) {
      dispatch(closeConnectionInfoModal());
    }
  }, [error, dispatch]);

  const isMetamaskConnector = connector.id === "metaMask";
  const isMobile = useMediaQuery("(max-width: 800px)");

  return (
    <>
      {isMobile && !connector.ready && (
        <StyledOptionLink
          isMetamask={false}
          href={metamaskUrl}
          key={connector.id}
          onClick={() => {
            // connect({ connector, chainId });
            // dispatch(openConnectionInfoModal());
            dispatch(toggleConnectorsModal());
          }}
        >
          <ImageBox>
            <img
              src={iconUrl}
              height="36"
              width="36"
              alt="icon"
              style={{ marginLeft: "2.5rem" }}
            />
          </ImageBox>
          <TextBox>{connector.name}</TextBox>
        </StyledOptionLink>
      )}
      {connector.ready ? (
        <StyledOptionBtn
          isMetamask={false}
          key={connector.id}
          onClick={() => {
            connect({ connector, chainId });
            dispatch(openConnectionInfoModal());
            dispatch(toggleConnectorsModal());
          }}
        >
          <ImageBox>
            <img
              src={iconUrl}
              height="36"
              width="36"
              alt="icon"
              style={{ marginLeft: "2.5rem" }}
            />
          </ImageBox>
          <TextBox>
            <p>{isMetamaskConnector ? connector.name : "WalletConnect"}</p>
          </TextBox>
        </StyledOptionBtn>
      ) : (
        <InstallMetamaskOption isMetamaskConnector={isMetamaskConnector} />
      )}
    </>
  );
};
