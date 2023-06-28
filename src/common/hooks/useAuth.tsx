import { useEffect, useState } from "react";

import { useAccount, useDisconnect, useNetwork } from "wagmi";

import { CHAIN_IDS, SupportedChainId } from "constans/chains";
import tos from "content/TermsOfService.json";
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
import { hasSoul } from "web3/methods/hasSoul";
import { isWalletSanctioned } from "web3/methods/isSanctioned";

import { useCheckMinting } from "./useCheckMinting";
import { useCreateOnfidoApplicant } from "./useCreateOnfidoApplicant";

export const useAuth = () => {
  const verified = useAppSelector(selectVerifiedUser);
  const isMintingActive = useAppSelector(selectIsMintingActive);
  const mockedWalletAddress = useAppSelector(selectMockedWalletAddress);
  const dispatch = useAppDispatch();

  const [fetchUser] = userApi.endpoints.getUserWallet.useLazyQuery();

  const { createOnfidoApplicant } = useCreateOnfidoApplicant();

  const { chain } = useNetwork();
  const { disconnect } = useDisconnect({
    onSuccess() {
      dispatch(reset());
      localStorage.clear();
    },
  });
  const { address } = useAccount();

  const walletAddress = address || mockedWalletAddress;
  const isVerified = Boolean(walletAddress) && verified;

  useCheckMinting(isVerified);

  const [isLoading, setIsLoading] = useState(false);
  const [isSanctioned, setIsSanctioned] = useState(false);

  const chainId = chain ? chain.id : SupportedChainId.POLYGON_MUMBAI;

  useEffect(() => {
    if (!chain) return;

    if (!CHAIN_IDS.includes(chain.id)) {
      dispatch(reset());
      disconnect();
    }
  }, [chain, disconnect, dispatch]);

  useEffect(() => {
    //flow for insert stonks
    const checkForUuid = async (mockedWalletAddress: string) => {
      const userWallet = await fetchUser({
        walletAddress: mockedWalletAddress,
        chainId,
      }).unwrap();
      if (userWallet.user?.uuid) {
        dispatch(checkIfVerified(true));
      } else {
        dispatch(checkIfVerified(false));
      }
    };

    if (mockedWalletAddress) {
      checkForUuid(mockedWalletAddress);
    }
  }, [chainId, dispatch, fetchUser, mockedWalletAddress]);

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
              dispatch(signTos(false));
              createOnfidoApplicant();
              return;
            }
          });
        if (!userWallet) return;

        if (userWallet.tosVersion !== tos.version) {
          dispatch(signTos(false));
        } else {
          dispatch(signTos(true));
        }
        const isVerified = await hasSoul(chainId, walletAddress);

        if (isVerified) {
          dispatch(checkIfVerified(isVerified));
        }
        dispatch(addApplicantId(userWallet.onfidoApplicantId));
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
  }, [walletAddress, dispatch, chainId, fetchUser, createOnfidoApplicant]);

  return {
    isVerified,
    isLoading,
    isSanctioned,
    isMintingActive,
  };
};
