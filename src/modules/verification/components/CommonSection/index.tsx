import { Content, Heading } from "modules/verification/styles";

type Props = {
  header: string | undefined;
  contentText: string | undefined;
  children: React.ReactNode;
  marginBottom?: number;
};
export const CommonSection = ({
  header,
  contentText,
  children,
  marginBottom,
}: Props) => {
  return (
    <>
      <Heading>{header}</Heading>
      <Content style={{ marginBottom: `${marginBottom}rem` }}>
        {contentText}
      </Content>
      {children}
    </>
  );
};
