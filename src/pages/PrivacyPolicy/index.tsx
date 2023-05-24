import { useFetchContent } from "common/TextContainer/useFetchContent";

import TextContainer from "../../common/TextContainer";

const PrivacyPolicy = () => {
  const { content } = useFetchContent("privacy-policy");
  return <TextContainer text={content} title="Privacy Policy" />;
};
export default PrivacyPolicy;
