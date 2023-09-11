import { useState } from "react";

import { useAccount, useNetwork } from "wagmi";

import { DEFAULT_CHAIN } from "core/constans/chains";
import { getRedirectUrl } from "modules/verification/utils/getRedirectUrl";
import { useOnfidoRedirectMutation } from "redux/api/onfido/onfidoApi";
import { toggleTosModal } from "redux/features/modal/tosSlice";
import {
  selectApplicantId,
  selectCallbackUrl,
  selectEmail,
  selectMockedWalletAddress,
} from "redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { loadLocalStorageTos } from "redux/localStorage";

import { useCreateOnfidoApplicant } from "./useCreateOnfidoApplicant";

export const useHandleOnfidoRedirect = () => {
  const dispatch = useAppDispatch();
  const onfidoApplicantId = useAppSelector(selectApplicantId);
  const email = useAppSelector(selectEmail);
  const tosAccepted = loadLocalStorageTos();
  const mockedWalletAddress = useAppSelector(selectMockedWalletAddress);
  const partnerCallbackUrl = useAppSelector(selectCallbackUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [onfidoRedirect] = useOnfidoRedirectMutation();
  const { address } = useAccount();
  const { chain } = useNetwork();

  const walletAddress = address || mockedWalletAddress;

  const chainId = address ? chain?.id : DEFAULT_CHAIN;

  const redirectUrl = getRedirectUrl();
  const { createOnfidoApplicant } = useCreateOnfidoApplicant();

  const handleOnfidoRedirect = async () => {
    if (walletAddress && chainId) {
      let applicantId = onfidoApplicantId;

      if (!applicantId) {
        const applicant = await createOnfidoApplicant();
        applicantId = applicant.id;
      }
      await onfidoRedirect({
        applicantId: applicantId,
        chainId,
        walletAddress,
        callbackUrl: partnerCallbackUrl,
        redirectUrl,
        email,
      })
        .unwrap()
        .then((responseUrl) => window.location.replace(responseUrl))
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    }
  };
  const handleOnfidoRedirectWithTosCheck = async () => {
    if (mockedWalletAddress && !tosAccepted) {
      dispatch(toggleTosModal(true));
      return;
    }

    await handleOnfidoRedirect();
  };

  return {
    handleOnfidoRedirect,
    handleOnfidoRedirectWithTosCheck,
    isLoading,
    mockedWalletAddress,
    walletAddress,
    tosAccepted,
  };
};
