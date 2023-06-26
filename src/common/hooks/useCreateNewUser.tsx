import { useCallback } from "react";

import {
  useCreateApplicantMutation,
  useCreateUserWalletMutation,
} from "redux/api/user/userApi";
import { addApplicantId } from "redux/features/user/userSlice";
import { useAppDispatch } from "redux/hooks";

export const useCreateNewUser = () => {
  const dispatch = useAppDispatch();
  const [createNewWallet] = useCreateUserWalletMutation();
  const [createApplicant] = useCreateApplicantMutation();

  const createNewUser = useCallback(
    async (walletAddress: string) => {
      const applicant = await createApplicant({}).unwrap();

      await createNewWallet({
        walletAddress,
        onfidoApplicantId: applicant.id,
      })
        .unwrap()
        .then((newUser) => {
          dispatch(addApplicantId(newUser.onfidoApplicantId));
        })
        .catch((e) => {
          console.error(e);
        });
    },
    [createNewWallet, dispatch, createApplicant],
  );
  return { createNewUser };
};
