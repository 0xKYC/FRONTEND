import { App } from "antd";

import { ArrowLeftOutlined, ExclamationCircleFilled } from "@ant-design/icons";

type Props = {
  title: string;
  content: string;
  onOk: () => void | Promise<void>;
  onCancel: () => void;
  okText: string;
  cancelText: string;
};
export const useConfirmModal = () => {
  const { modal } = App.useApp();

  const showConfirm = ({
    title,
    content,
    onOk,
    onCancel,
    okText,
    cancelText,
  }: Props) => {
    modal.confirm({
      title: title,
      icon: <ExclamationCircleFilled />,
      content: content,
      centered: true,
      okText: okText,
      closable: true,
      cancelText: cancelText,
      cancelButtonProps: { icon: <ArrowLeftOutlined /> },
      async onOk() {
        await onOk();
      },
      onCancel() {
        onCancel();
      },
    });
  };
  return { showConfirm };
};
