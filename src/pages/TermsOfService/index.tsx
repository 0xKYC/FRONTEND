import TextContainer from "../../common/TextContainer";
import tos from "../../content/TermsOfService.json";

const TermsOfService = () => {
  const { termsOfService } = tos;
  return <TextContainer text={termsOfService} title="0xKYC Terms Of Service" />;
};
export default TermsOfService;
