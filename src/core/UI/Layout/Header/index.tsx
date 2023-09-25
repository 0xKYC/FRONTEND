import { useCurrentPath } from "core/hooks/useCurrentPath";

import { DiscordHeader } from "./Discord";
import { Web3Header } from "./Web3";

export const Header = () => {
  const isDiscordOptionChoosen = useCurrentPath();

  return isDiscordOptionChoosen ? <DiscordHeader /> : <Web3Header />;
};
