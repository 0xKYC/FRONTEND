import styled from "styled-components";

export const BtnGroup = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid rgb(251, 115, 36);
  padding: 0.3rem;
  border-radius: 2rem;
  width: 440px;
  max-width: 100%;
  margin: 2rem auto;
  margin-bottom: 3rem;
  @media screen and (min-width: 1025px) {
    display: none;
  }
`;
export const StyledBtn = styled.button<{ selected: boolean }>`
  text-transform: uppercase;
  border-radius: 2rem;
  padding: 0.8rem 1.3rem;
  border: none;
  width: 100%;
  font-size: 0.85rem;
  font-weight: bold;
  letter-spacing: 0.5px;
  opacity: 0.95;
  /* background-color: ${(p) => (p.selected ? "white" : "#415362")}; */
  background-color: ${(p) => (p.selected ? "rgb(251, 115, 36)" : "white")};
  /* color: ${(p) => (p.selected ? "black" : "#e6e8ea")}; */
  color: ${(p) => (p.selected ? "white" : "black")};

  @media screen and (max-width: 330px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.8rem;
  }
`;
