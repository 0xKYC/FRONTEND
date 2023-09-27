import { button } from "content/IntroContent.json";
import { Flow } from "redux/api/onfido/types";

export type HomePageProps = {
  icon: string;
  title?: string;
  verifyTitle: string;
  verifyText: string;
  uniqueness: boolean;
  flow: Flow;
  content?: string;
  section?: any;
  button?: typeof button;
  t?: any;
  type?: string;
};
