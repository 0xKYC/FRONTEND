import ReactDOM from "react-dom";

import { I18nextProvider } from "react-i18next";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "antd/dist/reset.css";
import { WagmiConfig } from "wagmi";
import Router from "./router";
import i18n from "./translation";
import { connectWalletId, ethereumClient, wagmiClient } from "./connection";
import { Web3Modal } from "@web3modal/react";
import { ConfigProvider } from "antd";
import { saveState } from "./redux/localStorage";
import throttle from "lodash/throttle";

store.subscribe(
  throttle(() => {
    saveState({
      user: store.getState().user,
    });
  }, 1000)
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
      </ConfigProvider>
    </WagmiConfig>
    <Web3Modal
      themeColor="orange"
      projectId={connectWalletId}
      ethereumClient={ethereumClient}
    />
  </Provider>,
  document.getElementById("root")
);
