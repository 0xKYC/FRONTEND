import styled from "styled-components";

export const LOGO_SIZE = 20;

export const Container = styled.button`
  display: grid;
  background: none;
  grid-template-columns: min-content 1fr min-content;
  align-items: center;
  text-align: left;
  line-height: 24px;
  border: none;
  justify-content: space-between;
  padding: 10px 8px;
  cursor: pointer;
  border-radius: 12px;
  width: 240px;
`;

export const Label = styled.div`
  grid-column: 2;
  grid-row: 1;
  font-size: 1rem;
`;

export const Status = styled.div`
  grid-column: 3;
  grid-row: 1;
  display: flex;
  align-items: center;
`;

export const ApproveText = styled.div`
  font-size: 12px;
  grid-column: 2;
  grid-row: 2;
`;

export const Logo = styled.img`
  height: ${LOGO_SIZE}px;
  width: ${LOGO_SIZE}px;
  margin-right: 12px;
`;
