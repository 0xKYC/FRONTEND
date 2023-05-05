import { useEffect, useState } from "react";

import { useAccount, useDisconnect, useNetwork, useProvider } from "wagmi";

import { CHAIN_IDS } from "constans/chains";
import tos from "content/TermsOfService.json";
import {
  addApplicantId,
  checkIfVerified,
  reset,
  selectIsMintingActive,
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
  const dispatch = useAppDispatch();

  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const { disconnect } = useDisconnect({
    onSuccess() {
      dispatch(reset());
    },
  });
  const isVerified = isConnected && verified;
  const [isLoading, setIsLoading] = useState(false);
  const [isSanctioned, setIsSanctioned] = useState(false);

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
      if (address && chain) {
        try {
          setIsLoading(true);

          const isVerified = await hasSoul(chain.id, address);
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
  }, [address, dispatch, provider, chain]);

  useEffect(() => {
    const handleWalletSanctionCheck = async () => {
      if (address) {
        const isSanctioned = await isWalletSanctioned(address);

        if (isSanctioned) {
          setIsSanctioned(true);
        }
      }
    };

    const handleOnfidoAuth = async () => {
      if (address) {
        try {
          setIsLoading(true);
          const user = await findUserInDB(address);
          console.log("USER", user);
          if (!user) {
            dispatch(signTos(false));
            const newApplicant = await onfidoCreateApplicant();
            await createUserInDB({
              walletAddress: address,
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
              walletAddress: address,
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
  }, [address, dispatch]);

  return {
    isVerified,
    isLoading,
    isSanctioned,
    isMintingActive,
  };
};
