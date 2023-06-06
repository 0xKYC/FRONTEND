import { useEffect, useState } from "react";

import { SiweMessage, generateNonce } from "siwe";
import { useAccount, useDisconnect, useSignMessage } from "wagmi";

import tos from "content/TermsOfService.json";
import {
  useEditUserMutation,
  useVerifySignatureMutation,
} from "redux/api/user/userApi";
import {
  reset,
  selectTosAcceptedWallet,
  setAccessToken,
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
  const [editUser] = useEditUserMutation();
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
      chainId: 1,
      nonce: generateNonce(),
    });

    try {
      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      });

      // Verify signature
      const { accessToken } = await verify({ message, signature }).unwrap();

      // dispatch(setAccessToken(accessToken));

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
      console.log("why");
      console.log(error);
      closeModal();
      console.error(error);
    }
  };

  // const { isLoading, signMessageAsync } = useSignMessage({
  //   message: walletContent,
  //   async onSuccess(data) {
  //     setIsModalOpen(false);
  //     dispatch(signTos(true));

  //     const user = {
  //       walletAddress: address || "",
  //       signature: data,
  //       tosVersion: version,
  //       time_stamp: new Date().toISOString(),
  //     };
  //     try {
  //       await editUser(user);
  //     } catch (err) {
  //       closeModal();
  //     }
  //   },
  //   onError() {
  //     closeModal();
  //   },
  // });

  // const sign = useCallback(async () => {
  //   await signMessageAsync();
  // }, [signMessageAsync]);

  useEffect(() => {
    if (isConnected && !tosAccepted) {
      showModal();
    } else {
      setIsModalOpen(false);
    }
  }, [isConnected, address, tosAccepted]);

  return { closeModal, sign, isModalOpen, isLoading };
};
