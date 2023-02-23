import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";

const { confirm } = Modal;

interface Props {
  title: string;
  content: string;
  onOk: () => Promise<void>;
  onCancel: () => void;
  okText: string;
}
export const useConfirmModal = () => {
  const showConfirm = ({ title, content, onOk, onCancel, okText }: Props) => {
    confirm({
      title: title,
      icon: <ExclamationCircleFilled />,
      content: content,
      centered: true,
      okText: okText,
      closable: true,
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
