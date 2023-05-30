import { useNetwork } from "wagmi";

import { CheckOutlined, LoadingOutlined } from "@ant-design/icons";
import { SupportedChainId, getChainInfo } from "constans/chains";
import {
  selectCurrentChain,
  setChain,
} from "redux/features/connection/connectionSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import { ApproveText, Container, Label, Logo, Status } from "./styles";

type Props = {
  targetChain: SupportedChainId;
  onSelectChain: (targetChain: SupportedChainId, active: boolean) => void;
  isPending: boolean;
};
export const ChainSelectorItem = ({
  onSelectChain,
  isPending,
  targetChain,
}: Props) => {
  const dispatch = useAppDispatch();
  const { chain } = useNetwork();
  const chainId = useAppSelector(selectCurrentChain);
  const active = chain?.id
    ? chain.id === targetChain
    : chainId === targetChain && !isPending;
  const { label, logoUrl } = getChainInfo(targetChain);

  const handleSelectChain = () => {
    dispatch(setChain(targetChain));

    onSelectChain(targetChain, active);
  };

  return (
    <Container onClick={handleSelectChain}>
      <Logo src={logoUrl} alt={label} />
      <Label>{label}</Label>
      {isPending && <ApproveText>Approve in wallet</ApproveText>}

      <Status>
        {active && <CheckOutlined />}
        {isPending && <LoadingOutlined style={{ color: "#fb7324" }} />}
      </Status>
    </Container>
  );
};
