import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  title: string;
}

const Box = ({ title }: Props) => (
  <BoxContainer>
    {title}
  </BoxContainer>
);

export default Box;

const BoxContainer = styled.div`
  ${({ theme: {
      COLORS,
      SIZES,
      DEVICETYPE: { PC, Mobile }
    } }) => css`
    color: ${COLORS.FLORAL_WHITE};
    font-size: ${SIZES.THIRTY};
    width: 500px;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 auto;

    // PC 일떄
    ${PC} {
      background-color: ${COLORS.RED};
    }

    // Mobile 일때
    ${Mobile} {
      background-color: ${COLORS.DARK_SLATE_BLUE};
    }
  `};
`;
