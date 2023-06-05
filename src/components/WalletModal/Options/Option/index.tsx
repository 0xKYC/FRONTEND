import { useEffect } from "react";

import { Connector, useConnect } from "wagmi";

import {
  closeConnectionInfoModal,
  openConnectionInfoModal,
  selectCurrentChain,
  toggleConnectorsModal,
} from "redux/features/connection/connectionSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import { InstallMetamaskOption } from "./InstallMetamask";
import { getIcon } from "./getIcon";
import { ImageBox, StyledOptionBtn, TextBox } from "./styles";

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
  useEffect(() => {
    if (error) {
      dispatch(closeConnectionInfoModal());
    }
  }, [error, dispatch]);
  const isMetamaskConnector = connector.id === "metaMask";

  return (
    <>
      {connector.ready ? (
        <StyledOptionBtn
          isMetamask={isMetamaskConnector}
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
            {isMetamaskConnector ? connector.name : "WalletConnect"}
          </TextBox>
        </StyledOptionBtn>
      ) : (
        <InstallMetamaskOption isMetamaskConnector={isMetamaskConnector} />
      )}
    </>
  );
};
