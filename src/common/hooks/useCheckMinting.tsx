import { useEffect } from "react";

import { useAccount, useNetwork } from "wagmi";

import { SupportedChainId } from "constans/chains";
import {
  selectIsMinting,
  selectMintingChain,
  selectMintingWallet,
  setMintingActive,
} from "redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

export const useCheckMinting = (isVerified: boolean) => {
  const minting = useAppSelector(selectIsMinting);
  const mintingChain = useAppSelector(selectMintingChain);
  const mintingWalletAddress = useAppSelector(selectMintingWallet);

  const dispatch = useAppDispatch();
  const { address } = useAccount();
  const { chain } = useNetwork();

  const chainId = chain ? chain.id : SupportedChainId.POLYGON_MUMBAI;

  useEffect(() => {
    if (
      minting &&
      !isVerified &&
      mintingChain === chainId &&
      address === mintingWalletAddress
    ) {
      dispatch(setMintingActive(true));
    } else {
      dispatch(setMintingActive(false));
    }
  }, [
    address,
    chainId,
    minting,
    mintingChain,
    mintingWalletAddress,
    dispatch,
    isVerified,
  ]);
};
