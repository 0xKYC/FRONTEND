import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { reset } from "redux/features/user/userSlice";
import { useAppDispatch } from "redux/hooks";

import { useSetUserParams } from "./useSetUserParams";

export const useHandleParams = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const address = searchParams.get("walletAddress");
  const redirectUrl = searchParams.get("redirectUrl");
  const callbackUrl = searchParams.get("callbackUrl");
  const { setParams } = useSetUserParams();

  useEffect(() => {
    if (!address || !redirectUrl || !callbackUrl) {
      dispatch(reset());
      return navigate("/");
    } else {
      setParams({ address, redirectUrl, callbackUrl });
    }
  }, [address, callbackUrl, navigate, redirectUrl, setParams, dispatch]);
};
