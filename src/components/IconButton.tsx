import React from 'react';
import styled from 'styled-components';

import StringButton from './StringButton';

const IconButton = () => (
  <Button name={'test'} />
);

export default IconButton;

const Button = styled(StringButton)``;
