import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAccount, useNetwork } from "wagmi";

import { DEFAULT_CHAIN } from "core/constans/chains";
import { getUserSbt } from "modules/profile/Web3/utils";
import { useGetUserWalletQuery, userApi } from "redux/api/user/userApi";
import {
  addTxHash,
  selectMintingChain,
  selectMockedWalletAddress,
  setFlow,
  setMinting,
  setVerified,
} from "redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import { checkIfVerified } from "../utils/checkIfVerified";
import { useLoadingBar } from "./useLoadingBar";

const apiRequestsToCall = 200;

export const useMint = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { address } = useAccount();
  const { chain } = useNetwork();
  const mintingChain = useAppSelector(selectMintingChain);
  const mockedWalletAddress = useAppSelector(selectMockedWalletAddress);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [apiCalls, setApiCalls] = useState(0);
  const { percent, setPercent, loadingText, handleCompleteLoading } =
    useLoadingBar();

  const chainId = chain ? chain.id : DEFAULT_CHAIN;
  const walletAddress = address || mockedWalletAddress;

  const { data: userWallet, isLoading } = useGetUserWalletQuery({
    walletAddress: walletAddress || "",
    chainId,
  });

  const { refetch } = userApi.endpoints.getUserWallet.useQuerySubscription({
    walletAddress: walletAddress || "",
    chainId,
  });

  // flow for insert stonks users
  useEffect(() => {
    if (mockedWalletAddress) {
      if (!userWallet) {
        refetch();
      } else {
        const sbt = getUserSbt(userWallet);

        if (sbt?.onfidoStatus !== "declined" && userWallet.user?.uuid) {
          dispatch(
            setMinting({
              minting: false,
              chainId: null,
              walletAddress: mockedWalletAddress,
              error: false,
            }),
          );
          handleCompleteLoading();
          setSuccess(true);
          dispatch(setVerified(true));

          navigate("/profile");
        }
      }
    }
  }, [
    mockedWalletAddress,
    userWallet,
    navigate,
    dispatch,
    handleCompleteLoading,
    apiCalls,
    refetch,
  ]);

  useEffect(() => {
    if (!walletAddress || !chainId) {
      return navigate("/");
    }

    if (error || success) {
      dispatch(
        setMinting({
          minting: false,
          chainId: null,
          walletAddress: walletAddress,
          error: error,
        }),
      );
    }
  }, [walletAddress, chainId, dispatch, error, navigate, success]);

  useEffect(() => {
    if (!walletAddress || !chainId) {
      return navigate("/");
    }

    if (userWallet && !isLoading && userWallet?.sbts?.length > 0) {
      const sbt = getUserSbt(userWallet);

      if (sbt && sbt.onfidoStatus !== "approved") {
        setError(true);
        dispatch(
          setMinting({
            minting: false,
            chainId: null,
            walletAddress: walletAddress,
            error: true,
          }),
        );
        return navigate("/error");
      }
    }
  }, [walletAddress, chainId, userWallet, dispatch, navigate, isLoading]);

  useEffect(() => {
    if (!walletAddress || !chainId) {
      return navigate("/");
    }

    if (!error && !success) {
      dispatch(
        setMinting({
          minting: true,
          chainId: mintingChain ? mintingChain : chainId,
          walletAddress: walletAddress,
          error: error,
        }),
      );
    }

    if (apiCalls < apiRequestsToCall) {
      const interval = setInterval(async () => {
        try {
          setApiCalls((currentApiCalls) => currentApiCalls + 1);

          if (!userWallet) {
            return refetch();
          }
          const isVerified = await checkIfVerified({
            flow: userWallet.flow,
            chainId,
            walletAddress,
          });

          if (apiCalls === apiRequestsToCall - 1) {
            clearInterval(interval);
            dispatch(
              setMinting({
                minting: false,
                chainId: null,
                walletAddress: walletAddress,
                error: true,
              }),
            );
            setError(true);
            setSuccess(false);
          }

          if (isVerified) {
            refetch();
            if (userWallet && userWallet?.sbts?.length > 0) {
              handleCompleteLoading();
              const sbt = getUserSbt(userWallet);
              if (sbt && sbt.txHash) dispatch(addTxHash(sbt.txHash));
              dispatch(
                setMinting({
                  minting: false,
                  chainId: null,
                  walletAddress: walletAddress,
                  error: false,
                }),
              );

              setSuccess(true);

              // dispatch(setFlow(userWallet.flow));
              dispatch(setVerified(isVerified));

              navigate("/profile");
            } else {
              refetch();
            }
          }
        } catch (err) {
          console.error(err);
          setError(true);
        }
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [
    apiCalls,
    navigate,
    walletAddress,
    dispatch,
    chainId,
    userWallet,
    error,
    mintingChain,
    success,
    refetch,
    setPercent,
    handleCompleteLoading,
  ]);

  return { error, percent, loadingText, mockedWalletAddress };
};
