import { DiscordProfilePage } from "./Discord";
import { Web3ProfilePage } from "./Web3";

const ProfilePage = () => {
  const isDiscordProfileChoosen = true;
  return isDiscordProfileChoosen ? <DiscordProfilePage /> : <Web3ProfilePage />;
};

export default ProfilePage;
