import styled from "styled-components";

interface IconPopupContentProps {
    readonly bgColor: string;
};

export const IconPopupContent = styled.div<IconPopupContentProps>`
    width: 100px;
    padding: 10px;
    text-align: center;
    background-color: white;
    border: ${({ bgColor }) => '2px solid '+bgColor+';'};
    color: ${({ bgColor }) => bgColor}
`;
