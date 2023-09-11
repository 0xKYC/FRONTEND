import { useLayoutEffect, useState } from "react";

import { useAccount, useDisconnect } from "wagmi";

import { reset } from "redux/features/user/userSlice";
import { useAppDispatch } from "redux/hooks";
import { loadLocalStorageTos, saveTosToLocalStorage } from "redux/localStorage";

export const useSignTerms = () => {
  const { isConnected } = useAccount();
  const dispatch = useAppDispatch();
  const tosAccepted = loadLocalStorageTos();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { disconnect } = useDisconnect();
  const { address } = useAccount();

  const showModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
    disconnect();
    localStorage.clear();
    dispatch(reset());
  };

  const sign = () => {
    saveTosToLocalStorage(true);
    setIsModalOpen(false);
  };

  useLayoutEffect(() => {
    if (isConnected && !tosAccepted) {
      setTimeout(() => {
        showModal();
      }, 500);
    } else {
      setIsModalOpen(false);
    }
  }, [isConnected, address, tosAccepted]);

  return { closeModal, sign, isModalOpen };
};
