import { useEffect, useState } from "react";

import { SiweMessage } from "siwe";
import { useAccount, useDisconnect, useNetwork, useProvider } from "wagmi";

import { CHAIN_IDS, SupportedChainId } from "constans/chains";
import tos from "content/TermsOfService.json";
import {
  useEditUserMutation,
  useGetUserQuery,
  userApi,
} from "redux/api/user/userApi";
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
import { onfidoCreateApplicant } from "service/onfido/onfido.service";
import { createUserInDB, findUserInDB } from "service/user/user.service";
import { hasSoul } from "web3/methods/hasSoul";
import { isWalletSanctioned } from "web3/methods/isSanctioned";

import { useCheckMinting } from "./useCheckMinting";

const { walletContent } = tos;
export const useAuth = () => {
  const provider = useProvider();
  const verified = useAppSelector(selectVerifiedUser);
  const isMintingActive = useAppSelector(selectIsMintingActive);
  const mockedWalletAddress = useAppSelector(selectMockedWalletAddress);
  const dispatch = useAppDispatch();

  const { address } = useAccount();
  const walletAddress = address || mockedWalletAddress;
  const { chain } = useNetwork();
  const { disconnect } = useDisconnect({
    onSuccess() {
      dispatch(reset());
      localStorage.clear();
    },
  });
  const isVerified = Boolean(walletAddress) && verified;
  const [isLoading, setIsLoading] = useState(false);
  const [isSanctioned, setIsSanctioned] = useState(false);

  const chainId = chain ? chain.id : SupportedChainId.POLYGON_MUMBAI;
  const [editUser] = useEditUserMutation();
  const [fetchUser] = userApi.endpoints.getUser.useLazyQuery();
  useCheckMinting(isVerified);

  useEffect(() => {
    if (!chain) return;

    if (!CHAIN_IDS.includes(chain.id)) {
      dispatch(reset());
      disconnect();
    }
  }, [chain, disconnect, dispatch]);

  useEffect(() => {
    const checkSBT = async () => {
      if (walletAddress && chainId) {
        try {
          setIsLoading(true);

          const isVerified = await hasSoul(chainId, walletAddress);
          if (isVerified) {
            dispatch(checkIfVerified(isVerified));
          } else {
            dispatch(checkIfVerified(false));
          }
        } catch (err) {
          console.error(err);
          setIsLoading(false);
        } finally {
          setIsLoading(false);
        }
      }
    };

    checkSBT();
  }, [walletAddress, dispatch, provider, chainId]);

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
      if (walletAddress) {
        try {
          setIsLoading(true);
          // const user = await findUserInDB(walletAddress, chainId);
          const user = await fetchUser({ walletAddress, chainId })
            .unwrap()
            .catch(async (e) => {
              dispatch(signTos(false));
              const newApplicant = await onfidoCreateApplicant();

              await createUserInDB({
                walletAddress,
                onfidoApplicantId: newApplicant.id,
              });

              dispatch(addApplicantId(newApplicant.id));
              return;
            });

          // if (!user) {
          //   dispatch(signTos(false));
          //   const newApplicant = await onfidoCreateApplicant();

          //   await createUserInDB({
          //     walletAddress,
          //     onfidoApplicantId: newApplicant.id,
          //   });

          //   dispatch(addApplicantId(newApplicant.id));
          //   return;
          // }
          if (user) {
            if (user.tosVersion !== tos.version) {
              dispatch(signTos(false));
            } else {
              dispatch(signTos(true));
            }

            if (user.onfidoApplicantId === null) {
              const newApplicant = await onfidoCreateApplicant();
              await editUser({
                walletAddress,
                onfidoApplicantId: newApplicant.id,
              });
              dispatch(addApplicantId(newApplicant.id));
            } else if (user.onfidoApplicantId !== null) {
              dispatch(addApplicantId(user.onfidoApplicantId));
            }
          }
        } catch (err) {
          dispatch(signTos(false));
          setIsLoading(false);
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      }
    };
    handleOnfidoAuth();
    handleWalletSanctionCheck();
  }, [walletAddress, dispatch, chainId, editUser, fetchUser]);

  return {
    isVerified,
    isLoading,
    isSanctioned,
    isMintingActive,
  };
};
