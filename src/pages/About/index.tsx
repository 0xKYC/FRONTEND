import TextContainer from "../../common/TextContainer";
import content from "../../content/AboutContent.json";

const About = () => {
  const { text } = content;

  return <TextContainer text={text} title="About us" />;
};
export default About;
