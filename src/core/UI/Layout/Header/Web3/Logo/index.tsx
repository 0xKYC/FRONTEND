import { useLocation } from "react-router-dom";

import { useMediaQuery } from "core/hooks/useMediaQuery";
import { selectUserFlow } from "redux/features/user/userSlice";
import { useAppSelector } from "redux/hooks";

import { Image, MobileImage } from "../../styles";

export const Logo = () => {
  const isMobile = useMediaQuery("(max-width:540px)");
  const { pathname } = useLocation();
  const userFlow = useAppSelector(selectUserFlow);

  const isSunscreenFlow =
    userFlow === "sunscreen" || userFlow === "insertStonks";
  const isUniquenessPage = pathname === "/uniqueness";
  return (
    <>
      {isUniquenessPage || isSunscreenFlow ? (
        <>
          {isMobile ? (
            <Image
              src="/img/sunscreen-small.png"
              alt="logo"
              width="60px"
              height="60px"
              style={{ display: isMobile ? "block" : "none" }}
            />
          ) : (
            <Image
              src="/img/sunscreen-logo-crop.png"
              alt="logo"
              height="54px"
              style={{ display: isMobile ? "none" : "block" }}
            />
          )}
        </>
      ) : (
        <>
          <Image
            src="/img/icons/new-logo.png"
            alt="logo"
            width="180px"
            height="54px"
          />
          <MobileImage
            src="/img/icons/0xkyc-icon.png"
            alt="logo"
            width="54px"
            height="54px"
          />
        </>
      )}
    </>
  );
};
