import { addApplicantId } from "../../redux/features/wallet/onfidoSlice";

import { useAppDispatch } from "../../redux/hooks";
import { onfidoCreateApplicant } from "../../service/onfido.service";
import {
  findUserInDB,
  initUserInDB,
  updateUserInDB,
} from "../../service/user.service";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";
export const useConnectWallet = () => {
  const dispatch = useAppDispatch();
  const { open } = useWeb3Modal();

  const handleOnfidoAuth = async (account: string | undefined) => {
    try {
      if (account) {
        const user = await findUserInDB(account);

        if (user === "noUserError") {
          const initUser = await initUserInDB(account);
        }
        const userProfile = await findUserInDB(account);
        console.log("userProfile", userProfile);

        if (userProfile.onfidoApplicantId !== null) {
          dispatch(addApplicantId(userProfile.onfidoApplicantId));
        }

        if (userProfile.onfidoApplicantId === null) {
          const newApplicant = await onfidoCreateApplicant();
          const uploadNewApplicant = await updateUserInDB(
            account,
            newApplicant.id
          );
          dispatch(addApplicantId(newApplicant.id));
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  useAccount({
    onConnect({ address }) {
      handleOnfidoAuth(address);
    },
  });

  return { open };
};
