import { Spin } from "antd";

import { LoadingOutlined } from "@ant-design/icons";

const Spinner = (
  <LoadingOutlined style={{ fontSize: 24, color: "white" }} spin />
);
export const LoadingCircle = () => {
  return <Spin indicator={Spinner} />;
};
