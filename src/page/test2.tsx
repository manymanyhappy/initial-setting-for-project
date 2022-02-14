import React from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '../components/Box';
import Button from '../components/Button';

const Test2 = () => {
  const navigate = useNavigate();

  const onClick = () => navigate('/');

  return (
    <>
      <Box title="Here is Test2 Page" />
      <Button onClickButton={onClick} />
    </>
  );
};

export default Test2;
