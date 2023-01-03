import TextContainer from "../../common/TextContainer";
import lorem from "../../content/LoremIpsum.json";

const PrivacyPolicy = () => {
  const { text } = lorem;

  return <TextContainer text={text} title="0xKYC Privacy Policy" />;
};

export default PrivacyPolicy;
