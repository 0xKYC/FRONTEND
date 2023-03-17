import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAccount, useNetwork } from "wagmi";
import { useFetchUser } from "../../common/hooks/useFetchUser";
import {
  addTxHash,
  checkIfVerified,
  selectMintingChain,
  setMinting,
} from "../../redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { checkForSBT, findUserInDB } from "../../service/user/user.service";
const apiRequestsToCall = 20;

export const useMint = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { address } = useAccount();
  const { chain } = useNetwork();
  const mintingChain = useAppSelector(selectMintingChain);

  const [error, setError] = useState(false);
  const [apiCalls, setApiCalls] = useState(0);

  const { data } = useFetchUser(address);

  useEffect(() => {
    if (!address || !chain) {
      return navigate("/");
    }

    dispatch(
      setMinting({
        minting: error ? false : true,
        chainId: mintingChain ? mintingChain : chain.id,
        walletAddress: address,
      })
    );
  }, [address, chain, chain?.id, dispatch, mintingChain, navigate, error]);

  useEffect(() => {
    if (!address || !chain) {
      return navigate("/");
    }

    if (data === "noUserError" || data?.onfidoStatus === "error") {
      return setError(true);
    }

    if (apiCalls < apiRequestsToCall) {
      const interval = setInterval(async () => {
        try {
          setApiCalls((currentApiCalls) => currentApiCalls + 1);
          const isVerified = await checkForSBT(address, chain.id);

          if (apiCalls === apiRequestsToCall - 1) {
            clearInterval(interval);
            dispatch(
              setMinting({
                minting: false,
                chainId: null,
                walletAddress: address,
              })
            );
            setError(true);
          }
          if (isVerified) {
            const user = await findUserInDB(address);
            dispatch(
              setMinting({
                minting: false,
                chainId: null,
                walletAddress: address,
              })
            );

            if (user !== "noUserError") {
              dispatch(checkIfVerified(isVerified));
              dispatch(addTxHash(user.txHash));
              navigate("/profile");
            }
          }
        } catch (err) {
          console.error(err);
          setError(true);
        }
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [apiCalls, navigate, address, dispatch, chain, data]);

  return { error };
};
