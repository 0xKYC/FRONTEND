import { ENV } from "env";

import { DiscordUser } from "redux/api/user/types";
import { useLogoutMutation, userApi } from "redux/api/user/userApi";
import { toggleTosModal } from "redux/features/modal/tosSlice";
import { useAppDispatch } from "redux/hooks";
import { loadLocalStorageTos } from "redux/localStorage";

export const useToggleAuth = (data: DiscordUser | undefined) => {
  const dispatch = useAppDispatch();
  const tosSigned = loadLocalStorageTos();

  const [logout] = useLogoutMutation();

  const toggleAuth = async () => {
    if (data) {
      try {
        await logout().unwrap();

        dispatch(userApi.util.resetApiState());
      } catch (error) {
        console.error(error);
      }
    } else if (!tosSigned) {
      dispatch(toggleTosModal(true));
    } else {
      window.location.href = ENV.REACT_APP_DISCORD_REDIRECT_URL;
    }
  };
  return { toggleAuth };
};
