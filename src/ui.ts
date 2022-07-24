import styled from 'styled-components';

export const Main = styled.div`
  height: 8000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px dashed green;
`
interface ColoredDivProps {
    readonly bgColor: string;
};

export const ColoredDiv = styled.div<ColoredDivProps>`
  height: 50px;
  width: 50px;
  border-radius: 15px;
  background-color: ${({ bgColor }) => bgColor};
`

export const ColoredDivPadding = styled.div<ColoredDivProps>`
  height: 50px;
  width: 50px;
  border-radius: 15px;
  background-color: ${({ bgColor }) => bgColor};
  padding: 20px; 
`


