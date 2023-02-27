import { useProvider, useAccount, useNetwork } from "wagmi";
import { useEffect, useState } from "react";
import {
  checkForSBT,
  checkSanctionedWallet,
  findUserInDB,
  initUserInDB,
  updateUserInDB,
} from "../../service/user/user.service";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  addApplicantId,
  addTxHash,
  checkIfVerified,
  selectIsMinting,
  selectMintingChain,
  selectMintingWallet,
  selectVerifiedUser,
} from "../../redux/features/user/userSlice";
import { onfidoCreateApplicant } from "../../service/onfido/onfido.service";

export const useAuth = () => {
  const provider = useProvider();
  const verified = useAppSelector(selectVerifiedUser);
  const minting = useAppSelector(selectIsMinting);
  const mintingChain = useAppSelector(selectMintingChain);
  const mintingWalletAddress = useAppSelector(selectMintingWallet);
  const dispatch = useAppDispatch();
  const { address } = useAccount();
  const { chain } = useNetwork();

  const [isLoading, setIsLoading] = useState(false);
  const [isSanctioned, setIsSanctioned] = useState(false);

  const isMinting = Boolean(
    address &&
      minting &&
      mintingChain === chain?.id &&
      address === mintingWalletAddress
  );

  const isVerified = Boolean(address && verified);

  useEffect(() => {
    const handleOnfidoAuth = async (account: string) => {
      try {
        const user = await findUserInDB(account);

        if (user === "noUserError") {
          await initUserInDB(account);
          const newApplicant = await onfidoCreateApplicant();
          await updateUserInDB(account, newApplicant.id);

          dispatch(addApplicantId(newApplicant.id));
        }

        if (user !== "noUserError" && user.onfidoApplicantId === null) {
          const newApplicant = await onfidoCreateApplicant();
          await updateUserInDB(account, newApplicant.id);
          dispatch(addApplicantId(newApplicant.id));
        } else if (user !== "noUserError" && user.onfidoApplicantId !== null) {
          dispatch(addApplicantId(user.onfidoApplicantId));

          dispatch(addTxHash(user.txHash));
        }
      } catch (err) {
        setIsLoading(false);

        console.error(err);
      }
    };
    const handleWalletCheck = async (address: string) => {
      const isSanctioned = await checkSanctionedWallet(address);

      if (isSanctioned) {
        setIsSanctioned(true);
      }
    };
    const checkSBT = async (address: string, chainId: number) => {
      try {
        const isVerified = await checkForSBT(address, chainId);

        if (isVerified) {
          const user = await findUserInDB(address);
          if (user !== "noUserError") {
            dispatch(checkIfVerified(isVerified));
            dispatch(addTxHash(user.txHash));
          }
        } else {
          dispatch(checkIfVerified(false));
        }
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    };
    const auth = async () => {
      try {
        if (address && chain) {
          setIsLoading(true);
          await Promise.allSettled([
            handleWalletCheck(address),
            checkSBT(address, chain.id),
            handleOnfidoAuth(address),
          ]);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    auth();
  }, [address, dispatch, provider, chain]);

  useAccount({
    onDisconnect() {
      dispatch(checkIfVerified(false));
      window.location.reload();
    },
  });

  return {
    isVerified,
    isLoading,
    isSanctioned,
    isMinting,
  };
};
