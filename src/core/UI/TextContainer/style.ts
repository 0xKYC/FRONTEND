import styled from "styled-components";

export const StyledContainer = styled("div")`
  position: relative;
  width: 100%;
  min-height: 80vh;
  max-width: 1100px;
  margin: 5rem auto 0;
  padding: 0 5rem 12rem;
  text-align: center;
  @media only screen and (max-width: 768px) {
    padding: 0 18px 12rem;
  }

  @media only screen and (max-width: 414px) {
    padding: 0 18px 12rem;
  }
`;
export const StyledTitle = styled("h6")`
  font-size: 2.3rem;
  text-align: center;
`;

export const LargeText = styled("p")`
  line-height: 2.1rem;
  font-size: 1.2rem;
  margin-top: 1rem;
`;
export const StyledText = styled("p")`
  line-height: 2.1rem;
  font-size: 1.2rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

export const BlackText = styled(StyledText)`
  color: black;
  margin: 1rem;
  font-weight: 500;
  font-size: 1rem;
`;

export const StyledLink = styled("p")`
  font-size: 1.1rem;
  margin-top: 0.5rem;
  text-decoration: underline;
`;

export const StyledOlList = styled("ol")`
  color: #18216d;
  line-height: 2;
  font-weight: 200;
  font-size: 1rem;
  list-style-position: outside;
  margin: 2rem 3em;
`;

export const Anchor = styled.a`
  margin-right: 1rem;
`;
export const TwitterLinksWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 800px) {
    display: inline;
  }
`;
export const Img = styled("img")<{
  objectPosition: string;
  objectFit: string;
  height: string;
}>`
  object-fit: ${(props) => props.objectFit || "contain"};
  object-position: ${(props) => props.objectPosition || "center"};
  width: 100%;
  height: ${(props) => props.height || "auto"};

  @media screen and (max-width: 500px) {
    height: 250px;
  }
`;
