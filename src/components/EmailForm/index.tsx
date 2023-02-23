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
      content: "We will not be able to contact you",
      onCancel: () => {},
      onOk: handleOnfidoRedirect,
      okText: "Skip",
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  if (error)
    return (
      <p style={{ color: "red" }}>
        An error has occured. Please, refresh the page and try again.
      </p>
    );
  return (
    <Form
      name="basic"
      //   labelCol={{ span: 8 }}
      //   wrapperCol={{ span: 16 }}
      style={{ width: "100%" }}
      onFinish={handleSubmit}
      onFinishFailed={onFinishFailed}
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

      <Form.Item
        name="newsletterChecked"
        valuePropName="checked"
        wrapperCol={{ offset: 3 }}
      >
        <Checkbox style={{ marginLeft: "-6px" }}>
          I want to receive special offers and product updates
        </Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{ offset: 3, span: 16 }}
        style={{ marginLeft: "-6px" }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button style={{ marginLeft: "1rem" }} type="ghost" onClick={showModal}>
          Skip
        </Button>
      </Form.Item>
    </Form>
  );
};
