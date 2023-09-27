import { DiscordUserResponse } from "redux/api/user/types";

const DISCORD_URL = "https://cdn.discordapp.com/";

export const getUserAvatar = (userData: DiscordUserResponse | undefined) => {
  const userAvatarUrl = userData
    ? `${DISCORD_URL}avatars/${userData.id}/${userData.avatar}.png`
    : "";

  return userAvatarUrl;
};
