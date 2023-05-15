import { ChainId } from "../../../constans/chains";
import { User } from "../../../service/user/types";

export const getUserSbt = (user: User, chainId: ChainId) => {
  if (!user.sbts) return null;

  const sbt = user.sbts.find((sbt) => sbt.chainId === chainId);
  console.log(user.sbts);
  return sbt;
};
