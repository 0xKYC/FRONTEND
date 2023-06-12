import { useState } from "react";

import { useAccount, useNetwork } from "wagmi";

import { getRedirectUrl } from "components/Content/getRedirectUrl";
import { SupportedChainId } from "constans/chains";
import { toggleTosModal } from "redux/features/modal/tosSlice";
import {
  selectApplicantId,
  selectCallbackUrl,
  selectMockedWalletAddress,
  selectTosAcceptedWallet,
} from "redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { onfidoRedirect } from "service/onfido/onfido.service";

export const useHandleOnfidoRedirect = () => {
  const dispatch = useAppDispatch();
  const onfidoApplicantId = useAppSelector(selectApplicantId);
  const tosAccepted = useAppSelector(selectTosAcceptedWallet);
  const mockedWalletAddress = useAppSelector(selectMockedWalletAddress);
  const partnerCallbackUrl = useAppSelector(selectCallbackUrl);
  const [isLoading, setIsLoading] = useState(false);

  const { address } = useAccount();
  const { chain } = useNetwork();

  const walletAddress = address || mockedWalletAddress;
  const chainId = address ? chain?.id : SupportedChainId.POLYGON_MUMBAI;

  const redirectUrl = getRedirectUrl();

  const handleOnfidoRedirect = async (email?: string) => {
    try {
      if (walletAddress && onfidoApplicantId && chainId) {
        await onfidoRedirect({
          applicantId: onfidoApplicantId,
          chainId,
          walletAddress,
          callbackUrl: partnerCallbackUrl,
          redirectUrl,
          email,
        });
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
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
