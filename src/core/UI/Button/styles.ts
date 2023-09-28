import styled from "styled-components";

export const StyledButton = styled("button")<{ color?: string }>`
  background: ${(p) => p.color || "#fb7324"};
  color: ${(p) => (p.color ? "#fb7324" : "#fff")};
  font-size: 1rem;
  font-weight: 400;
  width: 100%;
  border: 1px solid #edf3f5;
  border-radius: 4px;
  padding: 1rem 2rem;
  cursor: pointer;

  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid rgb(255, 130, 92);
    background-color: rgb(255, 130, 92);
  }

  @media screen and (max-width: 890px) {
    padding: 0.7rem 1.4rem;
  }
  @media screen and (max-width: 330px) {
    padding: 0.7rem 1rem;
  }
`;

export const DiscordButton = styled.button`
  background-color: #5865f2;
  color: #fff;
  font-size: 1rem;

  width: 100%;
  border: 1px solid #edf3f5;
  border-radius: 4px;
  padding: 1rem 2rem;
  cursor: pointer;

  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  /* &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid rgb(88, 101, 290);
    border: 1px solid #5865f2;
  } */
  :disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
  @media screen and (max-width: 890px) {
    padding: 0.7rem 1.4rem;
  }
  @media screen and (max-width: 330px) {
    padding: 0.7rem 1rem;
  }
`;
