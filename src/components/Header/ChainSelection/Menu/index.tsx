import { DownOutlined, UpOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { useEffect, useState } from "react";
import { useNetwork, useSwitchNetwork } from "wagmi";
import { useErrorMessage } from "../../../../common/hooks/useErrorMessage";
import { chains } from "../../../../connection";
import {
  ChainId,
  getChainInfo,
  NETWORK_SELECTOR_CHAINS,
  SupportedChainId,
} from "../../../../constans/chains";
import { ChainSelectorItem } from "../Item";
import { StyledButton } from "./styles";

export const ChainSelectionMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  const handleMenuClick = () => {};
  const { switchNetwork, error, pendingChainId } = useSwitchNetwork();
  const { chain } = useNetwork();
  const { contextHolder } = useErrorMessage(error);

  const onSelectChain = (targetChain: ChainId) => {
    switchNetwork?.(targetChain);
  };

  useEffect(() => {
    if (error) {
      setIsOpen(false);
    }
  }, [error]);
  const { label, logoUrl } = getChainInfo(chain?.id || chains[0].id);

  const items: MenuProps["items"] = NETWORK_SELECTOR_CHAINS.map(
    (chainId: SupportedChainId, index) => ({
      key: index,
      label: (
        <ChainSelectorItem
          onSelectChain={onSelectChain}
          targetChain={chainId}
          key={chainId}
          isPending={chainId === pendingChainId && !error}
        />
      ),
    })
  );

  return (
    <>
      {contextHolder}
      <Dropdown
        menu={{ items, onClick: handleMenuClick }}
        placement="bottomRight"
        arrow
        trigger={["click"]}
        onOpenChange={onOpenChange}
        open={isOpen}
      >
        <StyledButton
          isOpen={isOpen}
          icon={<img width={20} height={20} src={logoUrl} alt={label} />}
        >
          {label}
          {isOpen ? <UpOutlined /> : <DownOutlined />}
        </StyledButton>
      </Dropdown>
    </>
  );
};
