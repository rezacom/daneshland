import { styled } from 'styled-components';

export const Box = styled.div`
  background-color: rgb(51 65 85 / var(--tw-bg-opacity));
  padding: 30px 20px;
  border-radius: 10px;
  width: 500px;
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h3`
  font-size: 22px;
  text-align: center;
  margin-bottom: 10px;
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

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
