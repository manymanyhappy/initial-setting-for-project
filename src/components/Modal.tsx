import React from 'react';
import styled, { css } from 'styled-components';

interface Prop {
  onCloseModal: () => void;
}

const Modal = ({ onCloseModal} : Prop) => {
  /*
    1. useModal 초기의 값만 기억하고 렌더링 될때 값이 변하지 않음.. 뭐지..?
    2. Prop으로 close 함수를 내려주는 것이 맞는가?
    useModal 훅에서 깔끔하게 쓰고 싶은데 말이쥐...
  */
  // const { onCloseModal, isModalOpened } = useModal();

  return (
    <ModalShadow>
      <CloseButton onClick={onCloseModal}>
        ModalClose
      </CloseButton>
    </ModalShadow>
  );
};

export default Modal;

const ModalShadow = styled.div`
  ${({ theme: { COLORS }}) => css`
    width: 200px;
    height: 200px;

    background-color: ${COLORS.DARK_SLATE_BLUE};

    display: flex;
    justify-content: right;
  `};
`;

const CloseButton = styled.button`
  height: 25px;

  margin: 3px 3px 0 0;
`;
