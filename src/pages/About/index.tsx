import TextContainer from "../../common/TextContainer";
import lorem from "../../content/LoremIpsum.json";

const About = () => {
  const { text } = lorem;

  return <TextContainer text={text} title="About us" />;
};
export default About;
