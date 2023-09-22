import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { useNetwork, useSwitchNetwork } from "wagmi";

import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { ConnectionInfoModal } from "core/UI/Modals/ConnectionInfoModal";
import {
  ChainId,
  DEFAULT_CHAIN,
  IS_MAINNET,
  NETWORK_SELECTOR_CHAINS,
  ONLY_TESTNET_CHAINS,
  SupportedChainId,
  getChainInfo,
} from "core/constans/chains";
import { useErrorMessage } from "core/hooks/useErrorMessage";
import {
  closeConnectionInfoModal,
  openConnectionInfoModal,
  selectCurrentChain,
  selectIsConnectionInfoModalOpen,
  setChain,
} from "redux/features/connection/connectionSlice";
import {
  reset,
  selectMockedWalletAddress,
} from "redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import { ChainSelectorItem } from "../Item";
import { StyledButton, StyledLabel } from "./styles";

export const ChainSelectionMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { chain } = useNetwork();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const chainId = useAppSelector(selectCurrentChain);
  const isConnectionModalOpen = useAppSelector(selectIsConnectionInfoModalOpen);
  const mockedWalletAddress = useAppSelector(selectMockedWalletAddress);

  const onOpenChange = (open: boolean) => {
    setIsDropdownOpen(open);
  };

  const closeConnectionModal = useCallback(() => {
    dispatch(closeConnectionInfoModal());
  }, [dispatch]);

  const handleMenuClick = () => {};

  const { switchNetwork, error, pendingChainId, isLoading } = useSwitchNetwork({
    onSuccess() {
      setIsDropdownOpen(false);
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

  // get mocked chain (polygon or mumbai) for partner integration
  const { label: polygonLabel, logoUrl: polygonLogoUrl } =
    getChainInfo(DEFAULT_CHAIN);

  const mainnetNetworksOptions: MenuProps["items"] = [
    {
      key: "Mainnet",
      label: "Mainnet",
      disabled: true,
    },
    {
      key: 0,
      label: (
        <>
          <ChainSelectorItem
            onSelectChain={onSelectChain}
            targetChain={SupportedChainId.POLYGON}
            key={SupportedChainId.POLYGON}
            isPending={
              SupportedChainId.POLYGON === pendingChainId &&
              Boolean(!error) &&
              isLoading
            }
          />
        </>
      ),
    },
    {
      key: 1,
      label: (
        <>
          <ChainSelectorItem
            onSelectChain={onSelectChain}
            targetChain={SupportedChainId.BNB}
            key={SupportedChainId.BNB}
            isPending={
              SupportedChainId.BNB === pendingChainId &&
              Boolean(!error) &&
              isLoading
            }
          />
        </>
      ),
    },
    {
      key: "Testnets",
      label: "Testnets",
      disabled: true,
    },
    ...NETWORK_SELECTOR_CHAINS.slice(2).map(
      (chainId: SupportedChainId, index) => ({
        key: index + 2,
        label: (
          <>
            <ChainSelectorItem
              onSelectChain={onSelectChain}
              targetChain={chainId}
              key={chainId}
              isPending={
                chainId === pendingChainId && Boolean(!error) && isLoading
              }
            />
          </>
        ),
      }),
    ),
  ];
  const testnetNetworksOptions: MenuProps["items"] = [
    ...ONLY_TESTNET_CHAINS.map((chainId: SupportedChainId, index) => ({
      key: index + 1,
      label: (
        <>
          <ChainSelectorItem
            onSelectChain={onSelectChain}
            targetChain={chainId}
            key={chainId}
            isPending={
              chainId === pendingChainId && Boolean(!error) && isLoading
            }
          />
        </>
      ),
    })),
  ];
  const properNetworkOptions = IS_MAINNET
    ? mainnetNetworksOptions
    : testnetNetworksOptions;
  return (
    <>
      {contextHolder}
      <ConnectionInfoModal
        title={chain ? "Switching networks..." : "Connecting"}
        chain={chainId}
        closeModal={closeConnectionModal}
        isModalOpen={isConnectionModalOpen}
      />

      {mockedWalletAddress ? (
        <StyledButton
          icon={
            <img
              width={20}
              height={20}
              src={polygonLogoUrl}
              alt={polygonLabel}
            />
          }
        >
          <StyledLabel>{polygonLabel}</StyledLabel>
        </StyledButton>
      ) : (
        <Dropdown
          menu={{ items: properNetworkOptions, onClick: handleMenuClick }}
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
            <StyledLabel>{label}</StyledLabel>
            {isDropdownOpen ? <UpOutlined /> : <DownOutlined />}
          </StyledButton>
        </Dropdown>
      )}
    </>
  );
};
