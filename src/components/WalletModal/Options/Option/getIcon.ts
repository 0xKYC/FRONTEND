import COINBASE_ICON_URL from "../../assets/coinbase-wallet.svg";
import METAMASK_ICON_URL from "../../assets/metamask-icon.svg";
import WALLET_CONNECT_ICON_URL from "../../assets/walletconnect.svg";

export const getIcon = (connectorID: string) => {
  if (connectorID === "metaMask") {
    return METAMASK_ICON_URL;
  } else if (connectorID === "walletConnectLegacy") {
    return WALLET_CONNECT_ICON_URL;
  } else if (connectorID === "coinbaseWallet") {
    return COINBASE_ICON_URL;
  } else {
    return connectorID;
  }
};
