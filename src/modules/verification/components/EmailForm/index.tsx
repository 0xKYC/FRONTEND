import { useState } from "react";
import { useDispatch } from "react-redux";

import { Button, Checkbox, Form, Input } from "antd";

import { MailOutlined } from "@ant-design/icons";
import { useConfirmModal } from "core/UI/Modals/ConfirmModal";
import { LoadingCircle } from "core/UI/Spinner";
import { useSubscribeNewsletterMutation } from "redux/api/user/userApi";
import { setEmail } from "redux/features/user/userSlice";

import { isCompanyEmail } from "./email-validator/validateEmail";
import { ErrorText, Flex } from "./styles";

type FormValues = {
  email: string;
  newsletterChecked: boolean;
};
type Props = {
  handleNextStep: () => void;
};

export const EmailForm = ({ handleNextStep }: Props) => {
  const [error, setError] = useState(false);
  const { showConfirm } = useConfirmModal();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [subscribeNewsletter] = useSubscribeNewsletterMutation();
  const handleSubmit = async (values: FormValues) => {
    try {
      setIsLoading(true);

      // await handleOnfidoRedirect(values.email);
      if (values.newsletterChecked) {
        await subscribeNewsletter({ email: values.email });
      }
      dispatch(setEmail(values.email));
      handleNextStep();
      setIsLoading(false);
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
        "By skipping you might miss some important updates about your account (e.g. about your token expiry)",
      onCancel: () => {},
      onOk: handleNextStep,
      okText: "Skip",
      cancelText: "Go back",
    });
  };

  if (error) {
    return (
      <ErrorText>
        An error has occurred. Please, refresh the page and try again.
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
        style={{ marginBottom: "1.5rem" }}
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
          {isLoading ? <LoadingCircle /> : "Submit"}
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
