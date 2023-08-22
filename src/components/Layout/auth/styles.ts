import { styled } from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 150px);
`;


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

