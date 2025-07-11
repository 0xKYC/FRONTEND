import { Spin } from "antd";

import { LoadingOutlined } from "@ant-design/icons";
import {
  Box,
  StyledInfo,
  StyledModal,
  StyledP,
  Title,
} from "core/UI/Modals/TosModal/styles";
import { DEFAULT_CHAIN, getChainInfo } from "core/constans/chains";

type Props = {
  isModalOpen: boolean;
  chain: number | undefined;
  closeModal: () => void;
  title: string;
};
const loadingIcon = (
  <LoadingOutlined
    style={{ fontSize: 20, color: "blue", marginRight: ".3rem" }}
    spin
  />
);

export const ConnectionInfoModal = ({
  isModalOpen,
  title,
  closeModal,
  chain,
}: Props) => {
  const { label } = getChainInfo(chain || DEFAULT_CHAIN);
  return (
    <StyledModal
      zIndex={10}
      key={1}
      open={isModalOpen}
      onCancel={closeModal}
      maskClosable={true}
      footer={null}
    >
      <Box>
        <Title>Network selection</Title>

        <StyledP>
          Please make sure that you have selected the correct network ({label})
          in your wallet.
        </StyledP>

        <StyledInfo>
          <Spin indicator={loadingIcon} /> {title}
        </StyledInfo>
      </Box>
    </StyledModal>
  );
};
