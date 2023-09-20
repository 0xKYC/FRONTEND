import { button } from "content/IntroContent.json";

export type HomePageProps = {
  icon: string;
  title?: string;
  verifyTitle: string;
  verifyText: string;
  uniqueness: boolean;
  content?: string;
  section?: any;
  button?: typeof button;
  t?: any;
  type?: string;
};
