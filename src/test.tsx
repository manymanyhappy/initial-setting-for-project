import React from 'react';

interface Prop {
  children: React.ReactNode;
  color: string;
}

const Screen = () => (
  <BorderBox color='red'>
    <button>Hi</button>
  </BorderBox>
);

const BorderBox = ({ children, color }: Prop) => (
  <div>
    {children}
  </div>
);
