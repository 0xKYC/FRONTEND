import { button } from "content/IntroContent.json";

export type VerificationPageProps = {
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
