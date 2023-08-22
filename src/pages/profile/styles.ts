import { styled } from 'styled-components';

export const Box = styled.div`
  background-color: rgb(51 65 85 / var(--tw-bg-opacity));
  padding: 20px;
  border-radius: 10px;
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  gap: 30px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    height: 50px;
    border-radius: 8px;
    padding: 10px;
    color: #000;
  }
`;
