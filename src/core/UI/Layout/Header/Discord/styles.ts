import styled from "styled-components";

export const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  object-fit: contain;
  display: none;
  @media screen and (min-width: 425px) {
    display: block;
  }
`;
export const MobileImage = styled.img`
  display: inline-block;
  object-fit: contain;

  @media screen and (min-width: 425px) {
    display: none;
  }
`;

export const MobileConnectBtn = styled("div")`
  @media screen and (max-width: 890px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    button {
      padding: 0.5rem 0.7rem;
    }
  }

  display: none;
`;
