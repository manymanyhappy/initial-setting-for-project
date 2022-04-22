import { useState } from 'react';

const useModal = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const onCloseModal = () => setIsModalOpened(false);
  const onOpenModal = () => setIsModalOpened(true);

  return {
    isModalOpened,
    onCloseModal,
    onOpenModal
  };
};

export default useModal;
