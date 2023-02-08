import { useProvider, useAccount } from "wagmi";
import { useEffect, useState } from "react";
import {
  checkForSBT,
  checkSanctionedWallet,
  findUserInDB,
} from "../../service/user/user.service";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  addTxHash,
  checkIfVerified,
  selectVerifiedUser,
} from "../../redux/features/wallet/onfidoSlice";

export const useAuth = () => {
  const provider = useProvider();
  const verified = useAppSelector(selectVerifiedUser);

  const dispatch = useAppDispatch();
  const { address } = useAccount();

  const [isLoading, setIsLoading] = useState(false);
  const [isSanctioned, setIsSanctioned] = useState(false);

  useEffect(() => {
    const handleWalletCheck = async (address: string) => {
      const isSanctioned = await checkSanctionedWallet(address);

      if (isSanctioned) {
        setIsSanctioned(true);
      }
    };
    const checkSBT = async () => {
      try {
        if (address) {
          setIsLoading(true);
          const isVerified = await checkForSBT(address);

          if (isVerified) {
            const user = await findUserInDB(address);
            if (user !== "noUserError") {
              dispatch(checkIfVerified(isVerified));
              dispatch(addTxHash(user.txHash));
            }
          } else {
            dispatch(checkIfVerified(false));
          }
          setIsLoading(false);
        }
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    };
    if (address) {
      handleWalletCheck(address);
      checkSBT();
    }
  }, [address, provider, dispatch, verified]);

  return { verified, isLoading, isSanctioned };
};
