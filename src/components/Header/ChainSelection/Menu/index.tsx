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
  selectCurrentChain,
  selectIsConnectionInfoModalOpen,
  setChain,
  toggleConnectionInfoModal,
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
  console.log("modal", isConnectionModalOpen);
  const onOpenChange = (open: boolean) => {
    setIsDropdownOpen(open);
  };

  const handleMenuClick = () => {};
  const { switchNetwork, error, pendingChainId } = useSwitchNetwork({
    onSuccess() {
      dispatch(reset());
      navigate("/");
    },
  });

  const { contextHolder } = useErrorMessage(error);

  const closeConnectionInfoModal = useCallback(() => {
    dispatch(toggleConnectionInfoModal());
  }, [dispatch]);

  const onSelectChain = (targetChain: ChainId, active: boolean) => {
    if (!active) {
      switchNetwork?.(targetChain);
    }
    if (!active && chain) {
      closeConnectionInfoModal();
    }
  };

  useEffect(() => {
    if (error) {
      setIsDropdownOpen(false);
      closeConnectionInfoModal();
      if (chain) {
        dispatch(setChain(chain.id));
      }
    }
  }, [error, dispatch, chain, closeConnectionInfoModal]);

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
        chain={chainId}
        closeModal={closeConnectionInfoModal}
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
