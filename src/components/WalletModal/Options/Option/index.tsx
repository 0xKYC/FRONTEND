import { Connector, useConnect } from "wagmi";
import {
  selectCurrentChain,
  toggleModal,
} from "../../../../redux/features/network/networkSlice";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { getIcon } from "./getIcon";
import { InstallMetamaskOption } from "./InstallMetamask";
import { StyledOptionBtn } from "./styles";

interface Props {
  connector: Connector<any, any, any>;
}

export const Option = ({ connector }: Props) => {
  const dispatch = useAppDispatch();
  const { connect } = useConnect();
  const chainId = useAppSelector(selectCurrentChain);
  const iconUrl = getIcon(connector.id);
  return (
    <>
      {connector.ready ? (
        <StyledOptionBtn
          key={connector.id}
          onClick={() => {
            connect({ connector, chainId });
            dispatch(toggleModal());
          }}
        >
          <img
            src={iconUrl}
            height="36"
            width="36"
            alt="icon"
            style={{ marginRight: "1rem" }}
          />
          {connector.name}
        </StyledOptionBtn>
      ) : (
        <InstallMetamaskOption />
      )}
    </>
  );
};
