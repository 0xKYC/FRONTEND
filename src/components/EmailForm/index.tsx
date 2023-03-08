import { MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";
import { useConfirmModal } from "../../common/ConfirmModal";

import { isCompanyEmail } from "../../common/utils/email-validator/validateEmail";
import { subscribeNewsletter } from "../../service/user/user.service";

interface FormValues {
  email: string;
  newsletterChecked: boolean;
}
interface Props {
  handleOnfidoRedirect: () => Promise<void>;
}
export const EmailForm = ({ handleOnfidoRedirect }: Props) => {
  const [error, setError] = useState(false);
  const { showConfirm } = useConfirmModal();

  const handleSubmit = async (values: FormValues) => {
    try {
      if (values.newsletterChecked) {
        await subscribeNewsletter(values.email);
      }
      await handleOnfidoRedirect();
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  const showModal = () => {
    showConfirm({
      title: "Are you sure you want to skip?",
      content: "You won’t be informed about important updates in your account",
      onCancel: () => {},
      onOk: handleOnfidoRedirect,
      okText: "Skip",
      cancelText: "Go back",
    });
  };

  if (error) {
    return (
      <p style={{ color: "red" }}>
        An error has occured. Please, refresh the page and try again.
      </p>
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
          size="large"
          placeholder="Enter your email"
          suffix={<MailOutlined style={{ margin: "0 .2rem" }} />}
        />
      </Form.Item>

      <Form.Item name="newsletterChecked" valuePropName="checked">
        <Checkbox>I want to receive product updates</Checkbox>
      </Form.Item>
      <div style={{ display: "flex", width: "100%" }}>
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
      </div>
    </Form>
  );
};
