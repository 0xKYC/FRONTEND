import { useCallback } from "react";

import { useCreateApplicantMutation } from "redux/api/onfido/onfidoApi";

export const useCreateOnfidoApplicant = () => {
  const [createApplicant] = useCreateApplicantMutation();

  const createOnfidoApplicant = useCallback(async () => {
    const applicant = await createApplicant({}).unwrap();

    return applicant;
  }, [createApplicant]);

  return { createOnfidoApplicant };
};
