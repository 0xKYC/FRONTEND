import { useCallback } from "react";

import { useCreateApplicantMutation } from "redux/api/user/userApi";
import { addApplicantId } from "redux/features/user/userSlice";
import { useAppDispatch } from "redux/hooks";

export const useCreateOnfidoApplicant = () => {
  const dispatch = useAppDispatch();
  const [createApplicant] = useCreateApplicantMutation();

  const createOnfidoApplicant = useCallback(async () => {
    await createApplicant({})
      .unwrap()
      .then((applicant) => {
        dispatch(addApplicantId(applicant.id));
      })
      .catch((e) => {
        console.error(e);
      });
  }, [dispatch, createApplicant]);
  return { createOnfidoApplicant };
};
