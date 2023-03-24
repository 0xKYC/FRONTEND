import { useState, useEffect, useCallback } from "react";
import { useAccount, useDisconnect, useSignMessage } from "wagmi";
import {
  reset,
  selectTosAcceptedWallet,
  signTos,
} from "../../redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import tos from "../../content/TermsOfService.json";

export const useSignTerms = () => {
  const { isConnected } = useAccount();
  const dispatch = useAppDispatch();
  const acceptedWallet = useAppSelector(selectTosAcceptedWallet);
  const { termsOfService } = tos;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { disconnect } = useDisconnect();
  const { address } = useAccount();

  const showModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
    disconnect();
    dispatch(signTos(null));
    dispatch(reset());
  };

  const { signMessage, isLoading } = useSignMessage({
    message: termsOfService,
    onSuccess() {
      setIsModalOpen(false);
      dispatch(signTos(address || null));
    },
    onError() {
      closeModal();
    },
  });

  const sign = useCallback(() => {
    signMessage();
  }, [signMessage]);

  useEffect(() => {
    if (isConnected && acceptedWallet !== address) {
      showModal();
    } else {
      setIsModalOpen(false);
    }
  }, [isConnected, acceptedWallet, address]);

  return { closeModal, sign, isModalOpen, isLoading };
};
