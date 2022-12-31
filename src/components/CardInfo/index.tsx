import { Card } from "antd";
import { StyledText } from "./styles";
import content from "../../content/VerifyContent.json";
import { useTranslation } from "react-i18next";

export const CardInfo = () => {
  const { t } = useTranslation();
  return (
    <Card
      style={{ maxWidth: "540px" }}
      title="Information"
      bordered={false}
      headStyle={{ backgroundColor: "#f1f2f3" }}
      bodyStyle={{
        backgroundColor: "#f1f2f3",
        borderRadius: "0 0 40px",
      }}
    >
      <p>{t(content.info)}</p>

      <StyledText>{t(content.contact)}</StyledText>
    </Card>
  );
};
