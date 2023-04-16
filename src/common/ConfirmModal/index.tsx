import { Modal } from "antd";

import { ArrowLeftOutlined, ExclamationCircleFilled } from "@ant-design/icons";

const { confirm } = Modal;

interface Props {
  title: string;
  content: string;
  onOk: () => void | Promise<void>;
  onCancel: () => void;
  okText: string;
  cancelText: string;
}
export const useConfirmModal = () => {
  const showConfirm = ({ title, content, onOk, onCancel, okText, cancelText }: Props) => {
    confirm({
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
