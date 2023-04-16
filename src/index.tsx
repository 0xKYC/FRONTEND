import { Web3Modal } from "@web3modal/react";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";

import { ConfigProvider } from "antd";
import { WagmiConfig } from "wagmi";

import "antd/dist/reset.css";
import throttle from "lodash/throttle";

import { WalletConnectionModal } from "./components/WalletModal";
import { connectWalletId, ethereumClient, wagmiClient } from "./connection";
import { saveState } from "./redux/localStorage";
import { store } from "./redux/store";
import Router from "./router";
import i18n from "./translation";

store.subscribe(
  throttle(() => {
    saveState({
      user: store.getState().user,
    });
  }, 1000),
);

const App = () => (
  <I18nextProvider i18n={i18n}>
    <Router />
  </I18nextProvider>
);

ReactDOM.render(
  <Provider store={store}>
    <WagmiConfig client={wagmiClient}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#fb7324",
          },
        }}
      >
        <App />
        <WalletConnectionModal />
      </ConfigProvider>
    </WagmiConfig>
    <Web3Modal themeColor="orange" projectId={connectWalletId} ethereumClient={ethereumClient} />
  </Provider>,
  document.getElementById("root"),
);
