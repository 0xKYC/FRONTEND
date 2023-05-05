import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAccount, useNetwork } from "wagmi";

import { useFetchUser } from "common/hooks/useFetchUser";
import { getUserSbt } from "components/Content/Verified/utils";
import {
  addTxHash,
  checkIfVerified,
  selectMintingChain,
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
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [apiCalls, setApiCalls] = useState(0);

  const { data: user, loading } = useFetchUser(address);

  // useEffect(() => {
  //   if (!address || !chain) {
  //     return navigate("/");
  //   }
  //   if (success) {
  //     dispatch(
  //       setMinting({
  //         minting: false,
  //         chainId: null,
  //         walletAddress: address,
  //         error: false,
  //       }),
  //     );
  //   }
  // }, [address, chain, dispatch, navigate, success]);

  useEffect(() => {
    if (!address || !chain) {
      return navigate("/");
    }

    if (error || success) {
      dispatch(
        setMinting({
          minting: false,
          chainId: null,
          walletAddress: address,
          error: error,
        }),
      );
    }
  }, [address, chain, dispatch, error, navigate, success]);

  useEffect(() => {
    if (!address || !chain) {
      return navigate("/");
    }

    if (user && typeof user !== "undefined" && !loading) {
      const sbt = getUserSbt(user, chain.id);
      console.log(sbt);
      if (sbt && sbt.onfidoStatus !== "approved") {
        console.log("why");
        setError(true);
        dispatch(
          setMinting({
            minting: false,
            chainId: null,
            walletAddress: address,
            error: true,
          }),
        );
        return navigate("/error");
      }
    }
  }, [address, chain, user, dispatch, navigate, loading]);

  useEffect(() => {
    if (!address || !chain) {
      return navigate("/");
    }

    if (!error && !success) {
      dispatch(
        setMinting({
          minting: true,
          chainId: mintingChain ? mintingChain : chain.id,
          walletAddress: address,
          error: error,
        }),
      );
    }

    if (apiCalls < apiRequestsToCall) {
      const interval = setInterval(async () => {
        try {
          setApiCalls((currentApiCalls) => currentApiCalls + 1);
          const isVerified = await hasSoul(chain.id, address);

          if (apiCalls === apiRequestsToCall - 1) {
            clearInterval(interval);
            dispatch(
              setMinting({
                minting: false,
                chainId: null,
                walletAddress: address,
                error: true,
              }),
            );
            setError(true);
            setSuccess(false);
          }
          if (isVerified) {
            if (user) {
              const sbt = getUserSbt(user, chain.id);
              if (sbt && sbt.txHash) dispatch(addTxHash(sbt?.txHash));
            }
            dispatch(
              setMinting({
                minting: false,
                chainId: null,
                walletAddress: address,
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
    address,
    dispatch,
    chain,
    user,
    error,
    mintingChain,
    success,
  ]);

  return { error };
};
