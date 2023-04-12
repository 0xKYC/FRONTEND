import { useConnect } from "wagmi";

import { Option } from "./Option";
import { Box } from "./styles";

export const Options = () => {
  const { connectors } = useConnect();

  return (
    <Box>
      {connectors.map((connector) => (
        <Option connector={connector} key={connector.id} />
      ))}
    </Box>
  );
};
