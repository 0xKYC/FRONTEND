import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { App as AntdApp } from "antd";
import { ConfigProvider } from "antd";
import { throttle } from "lodash";
import i18n from "translation";
import { WagmiConfig } from "wagmi";

import { WalletConnectionModal } from "core/UI/Modals/WalletModal";
import { wagmiClient } from "core/web3/connection";
import { saveState, saveTosToLocalStorage } from "redux/localStorage";
import { store } from "redux/store";
import { Router } from "router/index";

store.subscribe(
  throttle(() => {
    saveState({
      user: store.getState().user,
    });
    saveTosToLocalStorage(store.getState().modal.tosSigned);
  }, 1000),
);

export const App = () => {
  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
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
                <Router />
                <WalletConnectionModal />
              </ConfigProvider>
            </AntdApp>
          </WagmiConfig>
        </Provider>
      </I18nextProvider>
    </BrowserRouter>
  );
};
