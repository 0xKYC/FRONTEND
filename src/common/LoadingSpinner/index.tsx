import { Spin } from "antd";

interface Props {
  tip: string;
  size?: "large" | "small" | "default";
  height?: string;
  width?: string;
}
export const LoadingSpinner = ({
  tip,
  size = "large",
  height,
  width,
}: Props) => {
  return (
    <Spin
      tip={tip}
      size={size}
      style={{
        width,
        color: "#fb7324",
        fontSize: "1.2rem",
      }}
    >
      <div style={{ height }}></div>
    </Spin>
  );
};
