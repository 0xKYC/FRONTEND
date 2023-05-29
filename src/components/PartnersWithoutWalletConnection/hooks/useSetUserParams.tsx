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
      const decodedRedirectUrl = Buffer.from(redirectUrl, "base64").toString(
        "utf-8",
      );

      dispatch(
        setPartnerParams({
          mockedWalletAddress: address,
          callbackUrl,
          redirectUrl: decodedRedirectUrl,
        }),
      );
    },
    [dispatch],
  );

  return { setParams };
};
