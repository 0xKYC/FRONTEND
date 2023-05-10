import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { useNetwork, useSwitchNetwork } from "wagmi";

import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useErrorMessage } from "common/hooks/useErrorMessage";
import { ConnectionInfoModal } from "components/ConnectionInfoModal";
import {
  ChainId,
  NETWORK_SELECTOR_CHAINS,
  SupportedChainId,
  getChainInfo,
} from "constans/chains";
import {
  closeConnectionInfoModal,
  openConnectionInfoModal,
  selectCurrentChain,
  selectIsConnectionInfoModalOpen,
  setChain,
} from "redux/features/connection/connectionSlice";
import { reset } from "redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import { ChainSelectorItem } from "../Item";
import { StyledButton } from "./styles";

export const ChainSelectionMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { chain } = useNetwork();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const chainId = useAppSelector(selectCurrentChain);
  const isConnectionModalOpen = useAppSelector(selectIsConnectionInfoModalOpen);

  const onOpenChange = (open: boolean) => {
    setIsDropdownOpen(open);
  };
  const closeConnectionModal = useCallback(() => {
    dispatch(closeConnectionInfoModal());
  }, [dispatch]);

  const handleMenuClick = () => {};

  const { switchNetwork, error, pendingChainId } = useSwitchNetwork({
    onSuccess() {
      closeConnectionModal();
      dispatch(reset());
      navigate("/");
    },
  });

  const { contextHolder } = useErrorMessage(error);

  const onSelectChain = (targetChain: ChainId, active: boolean) => {
    if (!active) {
      switchNetwork?.(targetChain);
    }
    if (chain) {
      dispatch(openConnectionInfoModal());
    }
  };

  useEffect(() => {
    if (error) {
      setIsDropdownOpen(false);
      closeConnectionModal();
      if (chain) {
        dispatch(setChain(chain.id));
      }
    }
  }, [error, dispatch, chain, closeConnectionModal]);

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
    }),
  );

  return (
    <>
      {contextHolder}
      <ConnectionInfoModal
        title={chain ? "Switching networks..." : "Connecting"}
        chain={chainId}
        closeModal={closeConnectionModal}
        isModalOpen={isConnectionModalOpen}
      />
      <Dropdown
        menu={{ items, onClick: handleMenuClick }}
        placement="bottomRight"
        arrow
        trigger={["click"]}
        onOpenChange={onOpenChange}
        open={isDropdownOpen}
      >
        <StyledButton
          isOpen={isDropdownOpen}
          icon={<img width={20} height={20} src={logoUrl} alt={label} />}
        >
          {label}
          {isDropdownOpen ? <UpOutlined /> : <DownOutlined />}
        </StyledButton>
      </Dropdown>
    </>
  );
};
