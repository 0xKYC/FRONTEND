import { Modal } from "antd";
import { useState } from "react";
import { addApplicantId } from "../../redux/features/wallet/onfidoSlice";
import {
  addWalletAddress,
  selectWalletAddress,
} from "../../redux/features/wallet/walletSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { onfidoCreateApplicant } from "../../service/onfido.service";
import {
  findUserInDB,
  initUserInDB,
  updateUserInDB,
} from "../../service/user.service";

export const useConnectMetamask = () => {
  const dispatch = useAppDispatch();
  const walletAddress = useAppSelector(selectWalletAddress);

  const disconnectWallet = () => {
    dispatch(addWalletAddress(null));

    window.ethereum.request({
      method: "eth_requestAccounts",
      params: [{ eth_accounts: {} }],
    });
  };
  const confirmDisconnect = () => {
    Modal.confirm({
      centered: true,
      closable: true,
      content: "Are you sure you want to disconnect?",
      okText: "Disconnect",
      onOk: disconnectWallet,
      cancelText: "Cancel",
    });
  };
  const connectMetamask = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(async (accounts: string[]) => {
          if (!walletAddress) {
            const account = accounts[0];

            dispatch(addWalletAddress(account));

            let user = await findUserInDB(account);

            if (user === "noUserError") {
              const initUser = await initUserInDB(account);
            }
            const userProfile = await findUserInDB(account);
            console.log("userProfile", userProfile);

            if (userProfile.onfidoApplicantId !== null) {
              dispatch(addApplicantId(userProfile.onfidoApplicantId));
            }

            if (userProfile.onfidoApplicantId === null) {
              const newApplicant = await onfidoCreateApplicant();
              const uploadNewApplicant = await updateUserInDB(
                account,
                newApplicant.id
              );
              dispatch(addApplicantId(newApplicant.id));
            }
          }
          if (walletAddress) {
            confirmDisconnect();
          }
        })
        .catch((err: any) => {
          console.log(err);
        });
    } else {
      console.log("Please install MetaMask!");
    }
  };

  return { walletAddress, connectMetamask };
};
