import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";

import { App as AntdApp } from "antd";
import { ConfigProvider } from "antd";
import { WagmiConfig } from "wagmi";

import "antd/dist/reset.css";
import throttle from "lodash/throttle";

import { WalletConnectionModal } from "./core/UI/Modals/WalletModal";
import { wagmiClient } from "./core/web3/connection";
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
      <AntdApp>
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
      </AntdApp>
    </WagmiConfig>
  </Provider>,
  document.getElementById("root"),
);
