import TextContainer from "../../common/TextContainer";
import pp from "../../content/PrivacyPolicy.json";

const PrivacyPolicy = () => {
  const { privacyPolicy } = pp;
  return <TextContainer text={privacyPolicy} title="0xKYC Privacy Policy" />;
};
export default PrivacyPolicy;
