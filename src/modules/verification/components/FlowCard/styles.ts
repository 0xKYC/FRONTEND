import styled from "styled-components";

export const Wrapper = styled.div<{ isOutlined?: boolean }>`
  display: flex;
  flex-direction: column;

  /* box-shadow: ${(p) =>
    p.isOutlined ? "var(--shadow-lg)" : "var(--shadow-md)"}; */
  transform: ${(p) => (p.isOutlined ? "scale(1.1)" : "scale(1.0)")};
  text-align: center;
  border-radius: 1rem;
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

export const Title = styled.h3`
  font-size: 4rem;
  text-transform: capitalize;
`;

export const Description = styled.p`
  font-size: 2rem;
`;

export const PriceContainer = styled.div`
  margin: auto;

  & > *:not(:first-child) {
    margin-top: 2rem;
  }
`;

export const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 3rem;
  line-height: 1;
  font-weight: bold;

  span {
    font-size: 2rem;
    font-weight: normal;
  }
`;

export const RichText = styled.div`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ol,
  ul {
    list-style: none;
    padding: 0rem;

    li {
      padding-left: 2rem;
      position: relative;

      & > * {
        display: inline-block;
        vertical-align: top;
      }

      &::before {
        position: absolute;
        content: "L";
        left: 0;
        top: 0;
        text-align: center;
        color: rgb(var(--primary));
        font-family: arial;
        transform: scaleX(-1) rotate(-35deg);
      }
    }
  }
`;

// export const CustomButton = styled(Button)`
//   width: 100%;
//   margin: 0 auto;

//   @media screen and (min-width: 1080px) {
//     width: 80%;
//   }
// `;
/* ${media("<=desktop")} {
    box-shadow: var(--shadow-md);
    transform: none;
    order: ${(p) => (p.isOutlined ? -1 : 0)};
  } */
