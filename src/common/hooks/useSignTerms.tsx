import { useState, useEffect, useCallback } from "react";
import { useAccount, useDisconnect, useSignMessage } from "wagmi";
import {
  reset,
  selectTosAcceptedWallet,
  signTos,
} from "../../redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export const useSignTerms = () => {
  const { isConnected } = useAccount();
  const dispatch = useAppDispatch();
  const acceptedWallet = useAppSelector(selectTosAcceptedWallet);
  const [messageContent, setMessageContent] = useState("");
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

  useEffect(() => {
    import("../../terms-of-service.md").then((res) =>
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setMessageContent(response))
        .catch((err) => console.log(err))
    );
  }, []);

  const { signMessage, isLoading } = useSignMessage({
    message: messageContent,
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

  return { showModal, closeModal, sign, isModalOpen, isLoading };
};
