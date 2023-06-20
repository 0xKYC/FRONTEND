import { useCallback } from "react";

import { useCreateUserWalletMutation } from "redux/api/user/userApi";
import { addApplicantId } from "redux/features/user/userSlice";
import { useAppDispatch } from "redux/hooks";

export const useCreateNewUser = () => {
  const dispatch = useAppDispatch();
  const [createNewWallet] = useCreateUserWalletMutation();

  const createNewUser = useCallback(
    async (walletAddress: string) => {
      await createNewWallet({
        walletAddress,
      })
        .unwrap()
        .then((newUser) => {
          dispatch(addApplicantId(newUser.onfidoApplicantId));
        })
        .catch((e) => {
          console.error(e);
        });
    },
    [createNewWallet, dispatch],
  );
  return { createNewUser };
};
