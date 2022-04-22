import React from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '../components/Box';
import Button from '../components/Button';
import Modal from '../components/Modal';

import useDeviceSize from '../hooks/useDeviceSize';
import useModal from '../hooks/useModal';

const Home = () => {
  const navigate = useNavigate();
  const { isPcDevice } = useDeviceSize();
  const { isModalOpened, onOpenModal, onCloseModal } = useModal();

  const onClick = () => navigate('/test1');

  /*
    여러개의 Modal이 있을때, useModal의 상태값이 여러개로 존재하는지 궁금하도다!!!
  */

  return (
    <>
      <Box title={isPcDevice ? 'Here is Home Page in PC' : 'Here is Home Page in Mobile'} />
      <Button onClickButton={onClick} buttonName={'Move'} />

      {
        isPcDevice ?
        <div>Hi</div>
        :
        <button>Hi</button>
      }

      {
        isModalOpened && <Modal onCloseModal={onCloseModal} />
      }
      {
        !isModalOpened && <Button onClickButton={onOpenModal} buttonName={'Modal'}/>
      }
    </>
  );
};

export default Home;
