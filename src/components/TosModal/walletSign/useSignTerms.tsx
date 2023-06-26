import { useEffect, useState } from "react";

import { useAccount, useDisconnect } from "wagmi";

import {
  reset,
  selectTosAcceptedWallet,
  signTos,
} from "redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

export const useSignTerms = () => {
  const { isConnected } = useAccount();
  const dispatch = useAppDispatch();
  const tosAccepted = useAppSelector(selectTosAcceptedWallet);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { disconnect } = useDisconnect();
  const { address } = useAccount();

  const showModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
    disconnect();
    dispatch(signTos(false));
    dispatch(reset());
  };

  const sign = () => {
    dispatch(signTos(true));
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isConnected && !tosAccepted) {
      showModal();
    } else {
      setIsModalOpen(false);
    }
  }, [isConnected, address, tosAccepted]);

  return { closeModal, sign, isModalOpen };
};
