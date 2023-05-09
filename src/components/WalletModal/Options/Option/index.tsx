import { useEffect } from "react";

import { Connector, useConnect } from "wagmi";

import {
  selectCurrentChain,
  toggleConnectionInfoModal,
  toggleConnectorsModal,
} from "redux/features/connection/connectionSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import { InstallMetamaskOption } from "./InstallMetamask";
import { getIcon } from "./getIcon";
import { ImageBox, StyledOptionBtn, TextBox } from "./styles";

interface Props {
  connector: Connector<any, any, any>;
}

export const Option = ({ connector }: Props) => {
  const dispatch = useAppDispatch();
  const { connect, isLoading, pendingConnector, error } = useConnect();

  const chainId = useAppSelector(selectCurrentChain);
  const iconUrl = getIcon(connector.id);
  useEffect(() => {
    if (error) {
      dispatch(toggleConnectionInfoModal());
    }
  }, [error, dispatch]);
  const isMetamaskConnector = connector.name === "MetaMask";
  return (
    <>
      {connector.ready ? (
        <StyledOptionBtn
          isMetamask={isMetamaskConnector}
          key={connector.id}
          onClick={() => {
            connect({ connector, chainId });
            dispatch(toggleConnectionInfoModal());
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
        </StyledOptionBtn>
      ) : (
        <InstallMetamaskOption isMetamaskConnector={isMetamaskConnector} />
      )}
    </>
  );
};
