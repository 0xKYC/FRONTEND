import { useCallback } from "react";

import { setPartnerParams } from "redux/features/user/userSlice";
import { useAppDispatch } from "redux/hooks";

type Props = {
  address: string;
  redirectUrl: string;
  callbackUrl: string;
};
export const useSetUserParams = () => {
  const dispatch = useAppDispatch();
  const setParams = useCallback(
    ({ address, callbackUrl, redirectUrl }: Props) => {
      dispatch(
        setPartnerParams({
          mockedWalletAddress: address,
          callbackUrl,
          redirectUrl,
        }),
      );
    },
    [dispatch],
  );

  return { setParams };
};
