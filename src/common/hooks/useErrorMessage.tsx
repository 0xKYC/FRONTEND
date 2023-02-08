import { notification } from "antd";
import { useCallback, useEffect } from "react";

export const useErrorMessage = (error: Error | null) => {
  const [api, contextHolder] = notification.useNotification();

  const errorMessage = useCallback(() => {
    api.error({
      type: "error",
      message: "Failed to switch networks",
      key: 1,
      style: { position: "absolute", top: 70, right: 5 },
      duration: 4,
    });
  }, [api]);

  useEffect(() => {
    if (error) {
      errorMessage();
    }
  }, [error, errorMessage]);

  return { errorMessage, contextHolder };
};
