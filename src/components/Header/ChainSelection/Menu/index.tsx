import { DownOutlined, UpOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useNetwork, useSwitchNetwork } from "wagmi";
import { useErrorMessage } from "../../../../common/hooks/useErrorMessage";

import {
  ChainId,
  getChainInfo,
  NETWORK_SELECTOR_CHAINS,
  SupportedChainId,
} from "../../../../constans/chains";
import {
  selectCurrentChain,
  setChain,
} from "../../../../redux/features/network/networkSlice";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";

import { ChainSelectorItem } from "../Item";
import { StyledButton } from "./styles";

export const ChainSelectionMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { chain } = useNetwork();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const chainId = useAppSelector(selectCurrentChain);
  const onOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  const handleMenuClick = () => {};
  const { switchNetwork, error, pendingChainId } = useSwitchNetwork({
    onSuccess() {
      navigate("/");
    },
  });

  const { contextHolder } = useErrorMessage(error);

  const onSelectChain = (targetChain: ChainId, active: boolean) => {
    if (!active) switchNetwork?.(targetChain);
  };

  useEffect(() => {
    if (error) {
      setIsOpen(false);
      if (chain) {
        dispatch(setChain(chain.id));
      }
    }
  }, [error, dispatch, chain]);

  const { label, logoUrl } = getChainInfo(chain?.id || chainId);

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
