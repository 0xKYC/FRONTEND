import { useEffect, useState } from "react";

import { useAccount, useDisconnect, useNetwork, useProvider } from "wagmi";

import { CHAIN_IDS, SupportedChainId } from "constans/chains";
import tos from "content/TermsOfService.json";
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
import {
  createUserInDB,
  editUserInDB,
  findUserInDB,
} from "service/user/user.service";
import { hasSoul } from "web3/methods/hasSoul";
import { isWalletSanctioned } from "web3/methods/isSanctioned";

import { useCheckMinting } from "./useCheckMinting";

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
    },
  });
  const isVerified = Boolean(mockedWalletAddress) && verified;
  const [isLoading, setIsLoading] = useState(false);
  const [isSanctioned, setIsSanctioned] = useState(false);

  const chainId = chain ? chain.id : SupportedChainId.POLYGON_MUMBAI;

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
          const user = await findUserInDB(walletAddress);
          console.log("USER", user);
          if (!user) {
            dispatch(signTos(false));
            const newApplicant = await onfidoCreateApplicant();
            await createUserInDB({
              walletAddress,
              onfidoApplicantId: newApplicant.id,
            });

            dispatch(addApplicantId(newApplicant.id));
            return;
          }

          if (user.tosVersion !== tos.version) {
            dispatch(signTos(false));
          } else {
            dispatch(signTos(true));
          }

          if (user.onfidoApplicantId === null) {
            const newApplicant = await onfidoCreateApplicant();
            await editUserInDB({
              walletAddress,
              onfidoApplicantId: newApplicant.id,
            });
            dispatch(addApplicantId(newApplicant.id));
          } else if (user.onfidoApplicantId !== null) {
            dispatch(addApplicantId(user.onfidoApplicantId));
          }
        } catch (err) {
          setIsLoading(false);
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      }
    };
    handleOnfidoAuth();
    handleWalletSanctionCheck();
  }, [walletAddress, dispatch]);

  return {
    isVerified,
    isLoading,
    isSanctioned,
    isMintingActive,
  };
};
