import React from 'react';
import styled, { RuleSet, css } from 'styled-components';

const SIZES = {
  sm: css`
    width: 66px;
    height: 20px;
    font-size: 1.3rem;
    border-radius: 3px;
  `,
  md: css`
    width: 82px;
    height: 32px;
    font-size: 1.3rem;
    border-radius: 3px;
  `,
  lg: css`
    font-size: 1.25rem;
    border-radius: 3px;
  `,
};

const StyledButton = styled.button<{
  sizeStyle: RuleSet<object>;
  backgroundColor?: string;
  color?: string;
  border?: string;
}>`
  ${(p) => p.sizeStyle}
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : '#fff')};
  border-radius: 3px;
  font-weight: 600;
  color: ${({ color }) => (color ? color : 'inherit')};
  border: ${({ border }) => (border ? border : '1px solid #ccc')};
  cursor: pointer;
`;

const Button = ({
  children,
  size,
  backgroundColor,
  color,
  border,
  onClick,
}: {
  children: React.ReactNode;
  size: 'sm' | 'md' | 'lg';
  backgroundColor?: string;
  color?: string;
  border?: string;
  onClick?: () => void;
}) => {
  const sizeStyle = SIZES[size];
  return (
    <StyledButton
      sizeStyle={sizeStyle}
      backgroundColor={backgroundColor}
      color={color}
      border={border}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
