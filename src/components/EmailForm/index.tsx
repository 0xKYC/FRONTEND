import { MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";
import { useConfirmModal } from "../../common/ConfirmModal";

import { isCompanyEmail } from "../../common/utils/email-validator/validateEmail";
import { subscribeNewsletter } from "../../service/user/user.service";
import { ErrorText, Flex } from "./styles";

interface FormValues {
  email: string;
  newsletterChecked: boolean;
}
interface Props {
  handleOnfidoRedirect: (email?: string) => Promise<void>;
}
export const EmailForm = ({ handleOnfidoRedirect }: Props) => {
  const [error, setError] = useState(false);
  const { showConfirm } = useConfirmModal();

  const handleSubmit = async (values: FormValues) => {
    try {
      if (values.newsletterChecked) {
        await subscribeNewsletter(values.email);
      }
      await handleOnfidoRedirect(values.email);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  const showModal = () => {
    showConfirm({
      title: "Are you sure you want to skip?",
      content:
        "You won’t be informed about important updates in your account, including verification expiration",
      onCancel: () => {},
      onOk: handleOnfidoRedirect,
      okText: "Skip",
      cancelText: "Go back",
    });
  };

  if (error) {
    return (
      <ErrorText>
        An error has occured. Please, refresh the page and try again.
      </ErrorText>
    );
  }

  return (
    <Form
      name="basic"
      layout="vertical"
      style={{ width: "90%" }}
      onFinish={handleSubmit}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        style={{ marginBottom: "1.3rem" }}
        rules={[
          {
            message: "Email is not valid",
            validator(_, value) {
              const isValid = isCompanyEmail(value);
              if (isValid) {
                return Promise.resolve();
              } else {
                return Promise.reject(new Error("Email should be valid!"));
              }
            },
            validateTrigger: "onSubmit",
          },
        ]}
      >
        <Input
          autoComplete="email"
          size="large"
          placeholder="Enter your email"
          suffix={<MailOutlined style={{ margin: "0 .2rem" }} />}
        />
      </Form.Item>

      <Form.Item name="newsletterChecked" valuePropName="checked">
        <Checkbox>I want to receive product updates</Checkbox>
      </Form.Item>
      <Flex>
        <Button
          type="primary"
          size="large"
          htmlType="submit"
          style={{
            width: "50%",
          }}
        >
          Submit
        </Button>
        <Button
          size="large"
          style={{ width: "50%" }}
          type="ghost"
          onClick={showModal}
        >
          Skip
        </Button>
      </Flex>
    </Form>
  );
};
