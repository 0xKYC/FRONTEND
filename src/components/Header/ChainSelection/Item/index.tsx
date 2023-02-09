import { CheckOutlined, LoadingOutlined } from "@ant-design/icons";

import { useNetwork } from "wagmi";
import { getChainInfo, SupportedChainId } from "../../../../constans/chains";
import { ApproveText, Container, Label, Logo, Status } from "./styles";

interface Props {
  targetChain: SupportedChainId;
  onSelectChain: (targetChain: SupportedChainId) => void;
  isPending: boolean;
}
export const ChainSelectorItem = ({
  onSelectChain,
  isPending,
  targetChain,
}: Props) => {
  const { chain } = useNetwork();

  const active = chain?.id === targetChain;
  const { label, logoUrl } = getChainInfo(targetChain);

  return (
    <Container onClick={() => onSelectChain(targetChain)}>
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
