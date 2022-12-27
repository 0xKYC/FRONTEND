import { button } from "../../content/IntroContent.json";

export interface ContentBlockProps {
  icon: string;
  title: string;
  content: string;
  section?: any;
  button?: typeof button;
  t?: any;
  id: string;
  type?: string;
}
