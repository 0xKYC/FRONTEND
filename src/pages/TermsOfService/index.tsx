import { useFetchContent } from "common/TextContainer/useFetchContent";

import TextContainer from "../../common/TextContainer";

const TermsOfService = () => {
  const { content } = useFetchContent("terms-of-service");

  return <TextContainer text={content} title="Terms Of Service" />;
};
export default TermsOfService;
