import { useEffect, useState } from "react";

import { SiweMessage, generateNonce } from "siwe";
import { useAccount, useDisconnect, useNetwork, useSignMessage } from "wagmi";

import tos from "content/TermsOfService.json";
import {
  useEditUserWalletMutation,
  useVerifySignatureMutation,
} from "redux/api/user/userApi";
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
  const { signMessageAsync } = useSignMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const { chain } = useNetwork();
  const [editUser] = useEditUserWalletMutation();
  const [verify, { isLoading }] = useVerifySignatureMutation();
  const showModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
    disconnect();
    dispatch(signTos(false));
    dispatch(reset());
  };

  const sign = async () => {
    const domain = window.location.host;
    const origin = window.location.origin;

    const message = new SiweMessage({
      domain,
      address,
      statement: walletContent,
      uri: origin,
      version: "1",
      chainId: chain?.id || 8001,
      nonce: generateNonce(),
    });

    try {
      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      });

      // Verify signature
      const { accessToken } = await verify({ message, signature }).unwrap();
      console.log(accessToken);

      localStorage.setItem("access-token", accessToken);

      const user = {
        walletAddress: address || "",
        signature,
        tosVersion: version,
        time_stamp: new Date().toISOString(),
      };
      await editUser(user);
      dispatch(signTos(true));
      setIsModalOpen(false);
    } catch (error) {
      closeModal();
      console.error(error);
    }
  };

  useEffect(() => {
    if (isConnected && !tosAccepted) {
      showModal();
    } else {
      setIsModalOpen(false);
    }
  }, [isConnected, address, tosAccepted]);

  return { closeModal, sign, isModalOpen, isLoading };
};
