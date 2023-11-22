import { useLocation } from "react-router-dom";

import { selectUserFlow } from "redux/features/user/userSlice";
import { useAppSelector } from "redux/hooks";

export const useGetCurrentFlow = () => {
  const { pathname } = useLocation();
  const userFlow = useAppSelector(selectUserFlow);
  const isUniquenessPage = pathname === "/uniqueness";
  const isSunscreenFlow =
    userFlow === "sunscreen" || userFlow === "insertStonks" || isUniquenessPage;

  return { isSunscreenFlow };
};
