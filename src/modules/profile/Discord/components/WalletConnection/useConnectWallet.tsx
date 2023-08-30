import { useAccount, useDisconnect } from "wagmi";

import { toggleConnectorsModal } from "redux/features/connection/connectionSlice";
import { reset } from "redux/features/user/userSlice";
import { useAppDispatch } from "redux/hooks";

export const useConnectWallet = () => {
  const dispatch = useAppDispatch();
  const { isConnected, address } = useAccount();

  const { disconnect } = useDisconnect({
    onSuccess() {
      dispatch(reset());
      localStorage.clear();
    },
  });

  const handleConnectWallet = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isConnected) {
      disconnect();
    } else {
      dispatch(toggleConnectorsModal());
      event.currentTarget.blur();
    }
  };
  return { isConnected, handleConnectWallet, address };
};
