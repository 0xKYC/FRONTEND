import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useSetUserParams } from "./useSetUserParams";

export const useHandleParams = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const address = searchParams.get("walletAddress");
  const redirectUrl = searchParams.get("redirectUrl");
  const callbackUrl = searchParams.get("callbackUrl");
  const { setParams } = useSetUserParams();

  useEffect(() => {
    if (!address || !redirectUrl || !callbackUrl) {
      return navigate("/");
    } else {
      setParams({ address, redirectUrl, callbackUrl });
    }
  }, [address, callbackUrl, navigate, redirectUrl, setParams]);
};
