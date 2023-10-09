import { useMediaQuery } from "core/hooks/useMediaQuery";

import { Image } from "../../styles";

export const Logo = () => {
  const isMobile = useMediaQuery("(max-width:540px)");

  return (
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
  );
};
