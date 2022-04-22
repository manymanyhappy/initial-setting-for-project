import React from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '../components/Box';
import Button from '../components/Button';

const Test1 = () => {
  const navigate = useNavigate();

  const onClick = () => navigate('/test2');

  return (
    <>
      <Box title="Here is Test1 Page" />
      <Button onClickButton={onClick} />
    </>
  );
};

export default Test1;
