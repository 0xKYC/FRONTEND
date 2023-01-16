import {
  addApplicantId,
  addTxHash,
} from "../../redux/features/wallet/onfidoSlice";

import { useAppDispatch } from "../../redux/hooks";
import { onfidoCreateApplicant } from "../../service/onfido/onfido.service";
import {
  findUserInDB,
  initUserInDB,
  updateUserInDB,
} from "../../service/user/user.service";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";
import { useNavigate } from "react-router-dom";

export const useConnectWallet = () => {
  const dispatch = useAppDispatch();
  const { open } = useWeb3Modal();
  const navigate = useNavigate();
  const handleOnfidoAuth = async (account: string) => {
    try {
      const user = await findUserInDB(account);
      console.log("userProfile", user);
      if (user === "noUserError") {
        await initUserInDB(account);
      }
      if (user !== "noUserError" && user.onfidoApplicantId === null) {
        const newApplicant = await onfidoCreateApplicant();
        await updateUserInDB(account, newApplicant.id);
        dispatch(addApplicantId(newApplicant.id));
      } else if (user !== "noUserError" && user.onfidoApplicantId !== null) {
        dispatch(addApplicantId(user.onfidoApplicantId));
        dispatch(addTxHash(user.txHash));
      }

      console.log("userProfile", user);
    } catch (err) {
      console.error(err);
    }
  };

  useAccount({
    onConnect({ address }) {
      if (address) {
        navigate("/");
        handleOnfidoAuth(address);
      }
    },
    onDisconnect() {
      window.location.reload();
    },
  });

  return { open };
};
