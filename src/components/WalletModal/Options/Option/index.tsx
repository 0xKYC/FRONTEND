import { Connector, useConnect } from "wagmi";
import {
  selectCurrentChain,
  toggleModal,
} from "redux/features/network/networkSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { getIcon } from "./getIcon";
import { InstallMetamaskOption } from "./InstallMetamask";
import { ImageBox, StyledOptionBtn, TextBox } from "./styles";

interface Props {
  connector: Connector<any, any, any>;
}

export const Option = ({ connector }: Props) => {
  const dispatch = useAppDispatch();
  const { connect } = useConnect();
  const chainId = useAppSelector(selectCurrentChain);
  const iconUrl = getIcon(connector.id);

  const isMetamaskConnector = connector.name === "MetaMask";
  return (
    <>
      {connector.ready ? (
        <StyledOptionBtn
          isMetamask={isMetamaskConnector}
          key={connector.id}
          onClick={() => {
            connect({ connector, chainId });
            dispatch(toggleModal());
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
