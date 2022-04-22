import React, { useRef } from 'react';
import styled from 'styled-components';

import Button from './Button';

const Input = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickButton = () => {
    if(inputRef.current === null) return;

    console.log('input string', inputRef.current.value);
    // console.log('input string', inputRef?.current?.value);
  };

  return (
    <>
      <InputWrapper>
        <InputBox ref={inputRef} />
      </InputWrapper>
      <Button onClickButton={onClickButton} />
    </>

  );
};

export default Input;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const InputBox = styled.input`
  width: 400px;
  height: 70px;

  font-size: 45px;
`;
