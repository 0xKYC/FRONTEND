import { useEffect, useState } from "react";

import { useAccount, useDisconnect, useNetwork } from "wagmi";

import tos from "content/TermsOfService.json";
import {
  CHAIN_IDS,
  DEFAULT_CHAIN,
  IS_MAINNET,
  TESTNET_CHAINS_IDS,
} from "core/constans/chains";
import { hasSoul } from "core/web3/methods/hasSoul";
import { isWalletSanctioned } from "core/web3/methods/isSanctioned";
import { UserNotFoundError } from "redux/api/user/types";
import { userApi } from "redux/api/user/userApi";
import {
  addApplicantId,
  checkIfVerified,
  reset,
  selectIsMintingActive,
  selectMockedWalletAddress,
  selectVerifiedUser,
  signTos,
} from "redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import { useCheckMinting } from "./useCheckMinting";

const supportedChains = IS_MAINNET ? CHAIN_IDS : TESTNET_CHAINS_IDS;

export const useAuth = () => {
  const verified = useAppSelector(selectVerifiedUser);
  const isMintingActive = useAppSelector(selectIsMintingActive);

  const mockedWalletAddress = useAppSelector(selectMockedWalletAddress);

  const dispatch = useAppDispatch();

  const [fetchUser] = userApi.endpoints.getUserWallet.useLazyQuery();

  const { chain } = useNetwork();
  const { disconnect } = useDisconnect({
    onSuccess() {
      dispatch(reset());
      localStorage.clear();
    },
  });
  const { address, isConnected } = useAccount();

  const walletAddress = address || mockedWalletAddress;
  const isVerified = Boolean(walletAddress) && verified;

  useCheckMinting(isVerified);

  const [isLoading, setIsLoading] = useState(false);
  const [isSanctioned, setIsSanctioned] = useState(false);

  const chainId = chain ? chain.id : DEFAULT_CHAIN;

  useEffect(() => {
    if (!chain) return;

    if (!supportedChains.includes(chain.id)) {
      dispatch(reset());
      disconnect();
    }
  }, [chain, disconnect, dispatch]);

  useEffect(() => {
    const handleWalletSanctionCheck = async () => {
      if (walletAddress) {
        const isSanctioned = await isWalletSanctioned(walletAddress);
        if (isSanctioned) {
          setIsSanctioned(true);
        }
      }
    };

    const handleUserAuth = async () => {
      if (!walletAddress) return;

      try {
        setIsLoading(true);

        const userWallet = await fetchUser({ walletAddress, chainId })
          .unwrap()
          .catch(async (error: UserNotFoundError) => {
            if (error.status === 404) {
              dispatch(addApplicantId(null));
            }
          });
        if (!userWallet) return;

        if (userWallet.tosVersion !== tos.version) {
          dispatch(signTos(false));
        }
        if (userWallet.signature) {
          dispatch(signTos(true));
        }

        dispatch(addApplicantId(userWallet.onfidoApplicantId));

        const isVerified = await hasSoul(chainId, walletAddress);
        const hasUuid = userWallet.user?.uuid;

        if (isVerified) {
          dispatch(checkIfVerified(isVerified));
        }

        if (mockedWalletAddress && hasUuid) {
          dispatch(checkIfVerified(true));
        }
      } catch (err) {
        dispatch(signTos(false));
        setIsLoading(false);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    handleUserAuth();
    handleWalletSanctionCheck();
  }, [walletAddress, dispatch, chainId, fetchUser, mockedWalletAddress]);

  return {
    isVerified,
    isLoading,
    isSanctioned,
    isMintingActive,
    isConnected,
  };
};
