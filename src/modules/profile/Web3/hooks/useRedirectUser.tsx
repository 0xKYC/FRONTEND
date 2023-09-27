import { useEffect } from "react";

export const useRedirectUser = (redirectUrlFromPartner: string | null) => {
  useEffect(() => {
    if (redirectUrlFromPartner) {
      const timer = setTimeout(() => {
        window.open(redirectUrlFromPartner, "_blank");
      }, 3500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [redirectUrlFromPartner]);
};
