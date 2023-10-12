import { ENV } from "env";

import { DiscordUserObject } from "redux/api/user/types";
import { useLogoutMutation, userApi } from "redux/api/user/userApi";
// import { toggleTosModal } from "redux/features/modal/tosSlice";
import { useAppDispatch } from "redux/hooks";

export const useToggleAuth = (data: DiscordUserObject | undefined) => {
  const dispatch = useAppDispatch();

  const [logout] = useLogoutMutation();

  const toggleAuth = async () => {
    if (data) {
      try {
        await logout().unwrap();

        dispatch(userApi.util.resetApiState());
      } catch (error) {
        console.error(error);
      }
    } else {
      window.location.href = ENV.REACT_APP_DISCORD_REDIRECT_URL;
    }
  };
  return { toggleAuth };
};
