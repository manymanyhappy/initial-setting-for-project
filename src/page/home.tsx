import React from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '../components/Box';
import Button from '../components/Button';

import useDeviceSize from '../hooks/useDeviceSize';

const Home = () => {
  const navigate = useNavigate();
  const { isPcDevice } = useDeviceSize();

  const onClick = () => navigate('/test1');

  return (
    <>
      <Box title={isPcDevice ? 'Here is Home Page in PC' : 'Here is Home Page in Mobile'} />
      <Button onClickButton={onClick} />
    </>
  );
};

export default Home;
