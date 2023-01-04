import ABI from "../../abi/MockedNFT.json";
import { useProvider, useAccount } from "wagmi";
import { Contract } from "ethers";
import { contractAddress } from "../../common/consts";
import { useEffect, useState } from "react";

interface Results {
  _hex: string;
  _isBigNumber: boolean;
}

export const useAuth = () => {
  const provider = useProvider();

  const { address } = useAccount();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkSBT = async () => {
      const contract = new Contract(contractAddress, ABI, provider);

      if (address) {
        try {
          const results: Results = await contract.balanceOf(address);

          console.log("RESULTS:", results);

          if (results._hex !== "0x01") {
            console.log("NOT authenticated");
            setIsAuth(false);
          } else {
            console.log("authenticated");
            setIsAuth(true);
          }
        } catch (err) {
          console.error(err);
        }
      }
    };
    checkSBT();
  }, [address, provider]);

  return { isAuth };
};
