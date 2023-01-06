import { useProvider, useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { checkForSBT } from "../../service/user.service";

export const useAuth = () => {
  const provider = useProvider();

  const { address } = useAccount();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkSBT = async () => {
      try {
        if (address) {
          const isVerified = await checkForSBT(address);

          if (isVerified) {
            setIsAuth(true);
          } else {
            setIsAuth(false);
          }
        }
      } catch (err) {
        console.error(err);
      }
    };
    if (address) {
      checkSBT();
    }
  }, [address, provider]);

  return { isAuth };
};
