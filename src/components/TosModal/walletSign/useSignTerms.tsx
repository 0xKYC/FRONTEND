import { useCallback, useEffect, useState } from "react";

import { useAccount, useDisconnect, useSignMessage } from "wagmi";

import tos from "content/TermsOfService.json";
import { useEditUserMutation } from "redux/api/user/userApi";
import {
  reset,
  selectTosAcceptedWallet,
  signTos,
} from "redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

const { version, walletContent } = tos;
export const useSignTerms = () => {
  const { isConnected } = useAccount();
  const dispatch = useAppDispatch();
  const tosAccepted = useAppSelector(selectTosAcceptedWallet);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const [editUser] = useEditUserMutation();

  const showModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
    disconnect();
    dispatch(signTos(false));
    dispatch(reset());
  };

  const { isLoading, signMessageAsync } = useSignMessage({
    message: walletContent,
    async onSuccess(data) {
      setIsModalOpen(false);
      dispatch(signTos(true));

      const user = {
        walletAddress: address || "",
        signature: data,
        tosVersion: version,
        time_stamp: new Date().toISOString(),
      };
      try {
        await editUser(user);
      } catch (err) {
        closeModal();
      }
    },
    onError() {
      closeModal();
    },
  });

  const sign = useCallback(async () => {
    await signMessageAsync();
  }, [signMessageAsync]);

  useEffect(() => {
    if (isConnected && !tosAccepted) {
      showModal();
    } else {
      setIsModalOpen(false);
    }
  }, [isConnected, address, tosAccepted]);

  return { closeModal, sign, isModalOpen, isLoading };
};
