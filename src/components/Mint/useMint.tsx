import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";
import {
  addTxHash,
  checkIfVerified,
} from "../../redux/features/wallet/onfidoSlice";
import { useAppDispatch } from "../../redux/hooks";
import { checkForSBT, findUserInDB } from "../../service/user/user.service";

export const useMint = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { address } = useAccount();

  const [error, setError] = useState(false);
  const [apiCalls, setApiCalls] = useState(0);

  useEffect(() => {
    if (!address) {
      return navigate("/");
    }

    if (apiCalls < 11) {
      const interval = setInterval(async () => {
        try {
          setApiCalls((currentApiCalls) => currentApiCalls + 1);
          const isVerified = await checkForSBT(address);

          console.log(isVerified);

          if (apiCalls === 10) {
            clearInterval(interval);
            setError(true);
          }
          if (isVerified) {
            const user = await findUserInDB(address);
            if (user !== "noUserError") {
              console.log("verified");
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
  }, [apiCalls, navigate, address, dispatch]);

  return { error };
};
