import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  onClickButton: () => void;
}

const Button = ({ onClickButton }: Props) => (
  <ButtonContainer onClick={onClickButton}>
    Click
  </ButtonContainer>
);

export default Button;

const ButtonContainer = styled.button`
  ${({ theme: { COLORS, SIZES } }) => css`
    color: ${COLORS.FLORAL_WHITE};
    font-size: ${SIZES.TWENTY};
    width: 100px;
    height: 40px;

    background-color: ${COLORS.DARK_SLATE_BLUE};

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 auto;
    margin-top: 10px;
    border: none;
    outline: none;
  `};
`;
