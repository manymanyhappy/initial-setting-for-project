import React from 'react';
import styled from 'styled-components';

interface Prop {
  name: string;
}

const StringButton = ({ name }: Prop) => (
  <Button>
    {name}
  </Button>
);

export default StringButton;

const Button = styled.button``;
