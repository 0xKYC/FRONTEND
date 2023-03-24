import { useProvider, useAccount, useNetwork } from "wagmi";
import { useEffect, useState } from "react";
import {
  checkForSBT,
  checkSanctionedWallet,
  findUserInDB,
  initUserInDB,
  createUserInDB,
  editUserInDB,
} from "../../service/user/user.service";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  addApplicantId,
  addTxHashes,
  checkIfVerified,
  reset,
  selectIsMinting,
  selectIsMintingActive,
  selectMintingChain,
  selectMintingWallet,
  selectVerifiedUser,
  setMinting,
  setMintingActive,
  signTos,
} from "../../redux/features/user/userSlice";
import { onfidoCreateApplicant } from "../../service/onfido/onfido.service";
import tos from "../../content/TermsOfService.json";
export const useAuth = () => {
  const provider = useProvider();
  const verified = useAppSelector(selectVerifiedUser);
  const minting = useAppSelector(selectIsMinting);
  const isMintingActive = useAppSelector(selectIsMintingActive);
  const mintingChain = useAppSelector(selectMintingChain);
  const mintingWalletAddress = useAppSelector(selectMintingWallet);
  const dispatch = useAppDispatch();

  const { address, isDisconnected, isConnected } = useAccount();
  const { chain } = useNetwork();

  const isVerified = isConnected && verified;
  const [isLoading, setIsLoading] = useState(false);
  const [isSanctioned, setIsSanctioned] = useState(false);

  useEffect(() => {
    if (isDisconnected) dispatch(reset());
  }, [isDisconnected, dispatch]);

  useEffect(() => {
    if (
      minting &&
      !isVerified &&
      mintingChain === chain?.id &&
      address === mintingWalletAddress
    ) {
      dispatch(setMintingActive(true));
    } else {
      dispatch(
        setMinting({
          chainId: null,
          error: false,
          minting: false,
          walletAddress: "",
        })
      );
      dispatch(setMintingActive(false));
    }
  }, [
    address,
    chain?.id,
    minting,
    mintingChain,
    mintingWalletAddress,
    dispatch,
    isVerified,
  ]);

  useEffect(() => {
    const handleOnfidoAuth = async (account: string) => {
      try {
        const user = await findUserInDB(account);

        if (user === "noUserError") {
          await initUserInDB(account);
          const newApplicant = await onfidoCreateApplicant();
          await createUserInDB({
            walletAddress: account,
            onfidoApplicantId: newApplicant.id,
          });
          dispatch(addApplicantId(newApplicant.id));
        }

        if (user !== "noUserError" && user.onfidoApplicantId === null) {
          const newApplicant = await onfidoCreateApplicant();
          await editUserInDB({
            walletAddress: account,
            onfidoApplicantId: newApplicant.id,
          });
          dispatch(addApplicantId(newApplicant.id));
          if (user.tosVersion !== tos.version) {
            dispatch(signTos(null));
          }
        } else if (user !== "noUserError" && user.onfidoApplicantId !== null) {
          if (user.tosVersion !== tos.version) {
            dispatch(signTos(null));
          }

          dispatch(addApplicantId(user.onfidoApplicantId));
          dispatch(addTxHashes(user.txHashes));
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
            dispatch(addTxHashes(user.txHashes));
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

  return {
    isVerified,
    isLoading,
    isSanctioned,
    isMintingActive,
  };
};
