import TextContainer from "../../common/TextContainer";
import lorem from "../../content/LoremIpsum.json";

const TermsOfService = () => {
  const { text } = lorem;
  return <TextContainer text={text} title="0xKYC Terms Of Service" />;
};
export default TermsOfService;
