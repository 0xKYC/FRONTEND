import TextContainer from "../../common/TextContainer";
import lorem from "../../content/LoremIpsum.json";

const Documentation = () => {
  const { text } = lorem;

  return <TextContainer text={text} title="Documentation" />;
};

export default Documentation;
