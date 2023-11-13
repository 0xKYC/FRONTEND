import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useGetDiscordUserQuery, userApi } from "redux/api/user/userApi";
import { useAppDispatch } from "redux/hooks";

const apiRequestsToCall = 200;

export const useDiscordVerification = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [apiCalls, setApiCalls] = useState(0);

  const { data: user, isLoading } = useGetDiscordUserQuery();

  const { refetch } = userApi.endpoints.getDiscordUser.useQuerySubscription();

  useEffect(() => {
    if (user && !isLoading) {
      if (
        user.discordAccount.onfidoStatus === "error" ||
        user.discordAccount.onfidoStatus === "declined"
      ) {
        setError(true);
        return navigate("/error");
      }
    }
  }, [dispatch, navigate, isLoading, user]);

  useEffect(() => {
    if (!isLoading && !user) {
      return navigate("/sunscreen");
    }

    if (user?.discordAccount.isVerified) {
      setSuccess(true);
      navigate("/sunscreen");
    }

    if (apiCalls < apiRequestsToCall) {
      const interval = setInterval(async () => {
        try {
          setApiCalls((currentApiCalls) => currentApiCalls + 1);

          if (user?.discordAccount.isVerified) {
            setSuccess(true);
            navigate("/sunscreen");
          } else {
            refetch();
          }

          if (apiCalls === apiRequestsToCall - 1) {
            clearInterval(interval);

            setError(true);
            setSuccess(false);
          }
        } catch (err) {
          console.error(err);
          setError(true);
        }
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [apiCalls, navigate, dispatch, error, success, refetch, user, isLoading]);

  return { error };
};
