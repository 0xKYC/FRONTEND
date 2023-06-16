import { User } from "../../service/user/types";

export const getUserSbt = (user: User) => {
  if (user?.sbts.length > 0) {
    const sbt = user.sbts[0];
    return sbt;
  } else {
    return null;
  }
};
