import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAccount, useNetwork } from "wagmi";

import { getUserSbt } from "components/Content/Verified/utils";
import { SupportedChainId } from "constans/chains";
import { useGetUserQuery, userApi } from "redux/api/user/userApi";
import {
  addTxHash,
  checkIfVerified,
  selectMintingChain,
  selectMockedWalletAddress,
  setMinting,
} from "redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { getTransaction } from "web3/methods/getTransaction";
import { hasSoul } from "web3/methods/hasSoul";

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
  const { percent, setPercent, loadingText } = useLoadingBar();

  const chainId = chain ? chain.id : SupportedChainId.POLYGON_MUMBAI;
  const walletAddress = address || mockedWalletAddress;

  const { data: user, isLoading } = useGetUserQuery({
    walletAddress: walletAddress || "",
    chainId,
  });

  const { refetch } = userApi.endpoints.getUser.useQuerySubscription({
    walletAddress: walletAddress || "",
    chainId,
  });

  useEffect(() => {
    const getTx = async () => {
      if (user) {
        console.log(user);
        const sbt = getUserSbt(user);
        if (sbt && sbt.txHash) {
          await getTransaction(chainId, sbt.txHash);
        }
      }
    };
    getTx();
  }, [chainId, user]);

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

    if (user && !isLoading && user?.sbts?.length > 0) {
      const sbt = getUserSbt(user);

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
  }, [walletAddress, chainId, user, dispatch, navigate, isLoading]);

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
          const isVerified = await hasSoul(chainId, walletAddress);

          if (apiCalls === apiRequestsToCall - 1) {
            setPercent(100);
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

            if (user && user?.sbts?.length > 0) {
              const sbt = getUserSbt(user);
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
              dispatch(checkIfVerified(isVerified));

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
    user,
    error,
    mintingChain,
    success,
    refetch,
    setPercent,
  ]);

  return { error, percent, loadingText };
};
