import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAccount, useNetwork } from "wagmi";

import { useFetchUser } from "common/hooks/useFetchUser";
import { getUserSbt } from "components/Content/Verified/utils";
import { SupportedChainId } from "constans/chains";
import {
  addTxHash,
  checkIfVerified,
  selectMintingChain,
  selectMockedWalletAddress,
  setMinting,
} from "redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { hasSoul } from "web3/methods/hasSoul";

const apiRequestsToCall = 30;

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

  const chainId = chain ? chain.id : SupportedChainId.POLYGON_MUMBAI;
  const walletAddress = address || mockedWalletAddress;

  const { data: user, loading } = useFetchUser(walletAddress || "");

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

    if (user && typeof user !== "undefined" && !loading) {
      const sbt = getUserSbt(user, chainId);

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
  }, [walletAddress, chainId, user, dispatch, navigate, loading]);

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
            if (user) {
              const sbt = getUserSbt(user, chainId);
              if (sbt && sbt.txHash) dispatch(addTxHash(sbt?.txHash));
            }
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
  ]);

  return { error };
};
