import { useProvider, useAccount } from "wagmi";
import { useEffect } from "react";
import { checkForSBT } from "../../service/user.service";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  checkIfVerified,
  selectVerifiedUser,
} from "../../redux/features/wallet/onfidoSlice";

export const useAuth = () => {
  const provider = useProvider();
  const verified = useAppSelector(selectVerifiedUser);

  const dispatch = useAppDispatch();
  const { address } = useAccount();

  useEffect(() => {
    const checkSBT = async () => {
      try {
        if (address) {
          const isVerified = await checkForSBT(address);

          if (isVerified) {
            dispatch(checkIfVerified(isVerified));
          } else {
            dispatch(checkIfVerified(false));
          }
        }
      } catch (err) {
        console.error(err);
      }
    };
    if (address) {
      checkSBT();
    }
  }, [address, provider, dispatch, verified]);

  return { verified };
};
