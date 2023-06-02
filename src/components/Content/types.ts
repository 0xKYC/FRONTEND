import { button } from "content/IntroContent.json";

export type ContentBlockProps = {
  icon: string;
  title?: string;
  verifyTitle: string;
  verifyText: string;
  content?: string;
  section?: any;
  button?: typeof button;
  t?: any;
  type?: string;
};
