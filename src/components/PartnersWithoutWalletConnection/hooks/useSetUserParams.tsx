import { useCallback } from "react";

import { decode as base64_decode } from "base-64";
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
      const decodedRedirectUrl = base64_decode(redirectUrl);
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
