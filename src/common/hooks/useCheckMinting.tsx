import { useEffect } from "react";

import { useAccount, useNetwork } from "wagmi";

import { SupportedChainId } from "constans/chains";
import {
  selectIsMinting,
  selectIsMintingError,
  selectMintingChain,
  selectMintingWallet,
  selectMockedWalletAddress,
  setMintingActive,
} from "redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

export const useCheckMinting = (isVerified: boolean) => {
  const minting = useAppSelector(selectIsMinting);
  const mintingChain = useAppSelector(selectMintingChain);
  const mintingWalletAddress = useAppSelector(selectMintingWallet);
  const mockedWalletAddress = useAppSelector(selectMockedWalletAddress);
  const isError = useAppSelector(selectIsMintingError);
  const dispatch = useAppDispatch();
  const { address } = useAccount();
  const { chain } = useNetwork();
  const walletAddress = address || mockedWalletAddress;
  const chainId = chain ? chain.id : SupportedChainId.POLYGON_MUMBAI;

  useEffect(() => {
    if (
      minting &&
      !isVerified &&
      !isError &&
      mintingChain === chainId &&
      walletAddress === mintingWalletAddress
    ) {
      dispatch(setMintingActive(true));
    } else {
      dispatch(setMintingActive(false));
    }
  }, [
    walletAddress,
    chainId,
    minting,
    mintingChain,
    mintingWalletAddress,
    dispatch,
    isVerified,
    isError,
  ]);
};
