import { useEffect, useState } from "react";

import { useAccount, useDisconnect, useNetwork } from "wagmi";

import { CHAIN_IDS, SupportedChainId } from "constans/chains";
import tos from "content/TermsOfService.json";
import { useEditUserWalletMutation, userApi } from "redux/api/user/userApi";
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
import { useCreateNewUser } from "./useCreateNewUser";

export const useAuth = () => {
  const verified = useAppSelector(selectVerifiedUser);
  const isMintingActive = useAppSelector(selectIsMintingActive);
  const mockedWalletAddress = useAppSelector(selectMockedWalletAddress);
  const dispatch = useAppDispatch();

  const [editUser] = useEditUserWalletMutation();
  const [fetchUser] = userApi.endpoints.getUserWallet.useLazyQuery();
  const [fetchWalletInfo] = userApi.endpoints.getUserWalletInfo.useLazyQuery();
  const { createNewUser } = useCreateNewUser();

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

    const handleOnfidoAuth = async () => {
      if (!walletAddress) return;

      try {
        setIsLoading(true);

        const userWallet = await fetchUser({ walletAddress, chainId })
          .unwrap()
          .catch(async (error: any) => {
            if (error.status === 404) {
              dispatch(signTos(false));
              await createNewUser(walletAddress);
              // const newApplicant = await createOnfidoApplicant({}).unwrap();

              // await createUserInDB({
              //   walletAddress,
              //   onfidoApplicantId: newApplicant.id,
              // });

              // dispatch(addApplicantId(newApplicant.id));
              return;
            } else if (error.status === 401) {
              await fetchWalletInfo({
                walletAddress,
              })
                .unwrap()
                .then((d) => {
                  console.log(d);
                  console.log("user exists");
                  dispatch(signTos(false));
                })
                .catch((err: any) => {
                  if (err.status === 404) {
                    console.log("create a user for this wallet address!");
                    dispatch(signTos(false));
                    createNewUser(walletAddress);
                  }
                });
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
    handleOnfidoAuth();
    handleWalletSanctionCheck();
  }, [
    walletAddress,
    dispatch,
    chainId,
    editUser,
    fetchUser,
    createNewUser,
    fetchWalletInfo,
  ]);

  return {
    isVerified,
    isLoading,
    isSanctioned,
    isMintingActive,
  };
};
