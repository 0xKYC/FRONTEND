import { Flow } from "redux/api/onfido/types";

type FlowType = {
  index: number;
  name: Flow;
  description: string;
  title: string;
  src: string;
  redirectUrl: string;
};
export const FLOWS: FlowType[] = [
  {
    index: 0,
    name: "sunscreen",
    description: "Uniqueness Verification",
    title: "Sunscreen",
    src: "/img/sunscreen-black.png",
    redirectUrl: "0xkyc",
  },
  {
    index: 1,
    name: "sanctionsCheck",
    description: "Sanctions Check",
    title: "0xKYC",
    src: "/img/icons/new-logo.png",
    redirectUrl: "uniqueness",
  },
];
