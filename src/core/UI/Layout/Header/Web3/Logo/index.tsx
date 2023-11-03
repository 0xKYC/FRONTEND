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
        />
      ) : (
        <Image
          src="/img/sunscreen-black.png"
          alt="logo"
          height="54px"
        />
      )}
    </>
  );
};
