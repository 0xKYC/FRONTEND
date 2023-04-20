import { button } from "content/IntroContent.json";

export interface ContentBlockProps {
  icon: string;
  title: string;
  verifyTitle: string;
  verifyText: string;
  content: string;
  section?: any;
  button?: typeof button;
  t?: any;
  id: string;
  type?: string;
}
