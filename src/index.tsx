import ReactDOM from "react-dom";

import { I18nextProvider } from "react-i18next";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "antd/dist/antd.min.css";
import { WagmiConfig } from "wagmi";
import Router from "./router";
import i18n from "./translation";
import { connectWalletId, ethereumClient, wagmiClient } from "./connection";
import { Web3Modal } from "@web3modal/react";

const App = () => (
  <I18nextProvider i18n={i18n}>
    <Router />
  </I18nextProvider>
);

ReactDOM.render(
  <Provider store={store}>
    <WagmiConfig client={wagmiClient}>
      <App />
    </WagmiConfig>

    <Web3Modal
      themeColor="orange"
      projectId={connectWalletId}
      ethereumClient={ethereumClient}
    />
  </Provider>,
  document.getElementById("root")
);
