import { ChainId } from "../../../constans/chains";
import { User } from "../../../service/user/types";

export const getUserSbt = (user: User, chainId: ChainId) => {
  const sbt = user.sbts.find((sbt) => sbt.chainId === chainId);
  return sbt;
};
