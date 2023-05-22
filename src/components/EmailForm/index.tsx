import { useState } from "react";

import { Button, Form, Input, Spin } from "antd";

import { LoadingOutlined, MailOutlined } from "@ant-design/icons";
import { useConfirmModal } from "common/ConfirmModal";
import { isCompanyEmail } from "common/utils/email-validator/validateEmail";
import { subscribeNewsletter } from "service/user/user.service";

import { ErrorText, Flex } from "./styles";

type FormValues = {
  email: string;
  newsletterChecked: boolean;
};
type Props = {
  handleOnfidoRedirect: (email?: string) => Promise<void>;
};

const Spinner = (
  <LoadingOutlined style={{ fontSize: 24, color: "white" }} spin />
);
export const EmailForm = ({ handleOnfidoRedirect }: Props) => {
  const [error, setError] = useState(false);
  const { showConfirm } = useConfirmModal();
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (values: FormValues) => {
    try {
      setIsLoading(true);

      await handleOnfidoRedirect(values.email);
      await subscribeNewsletter(values.email);
    } catch (error) {
      console.error(error);
      setError(true);
      setIsLoading(false);
    }
  };

  const showModal = () => {
    showConfirm({
      title: "Are you sure you want to skip?",
      content:
        "If you skip you will only miss out on our company updates, your email is currently not linked to your wallet address so subscribing to our newsletter is 100% safe",
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
        style={{ marginBottom: "2rem" }}
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

      {/* <Form.Item name="newsletterChecked" valuePropName="checked">
        <Checkbox>I want to receive product updates</Checkbox>
      </Form.Item> */}
      <Flex>
        <Button
          type="primary"
          size="large"
          htmlType="submit"
          style={{
            width: "50%",
          }}
        >
          {isLoading ? <Spin indicator={Spinner} /> : "Submit"}
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
