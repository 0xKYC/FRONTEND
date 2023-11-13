import { Col, Divider } from "antd";

import { Text, TextBox } from "../styles";

export const Instructions = () => {
  return (
    <Col lg={24}>
      <TextBox>
        <Divider />
        <h3>To finish the verification:</h3>
        <Text>Go to your designated Discord server</Text>
        <Text>
          Click <b>„Get Role”</b> button or use <b>/get-role</b> command to
          claim your uniqueness
        </Text>
      </TextBox>
    </Col>
  );
};
