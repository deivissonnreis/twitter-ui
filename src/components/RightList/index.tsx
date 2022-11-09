import React from 'react';

import { Container, Item, Title } from './style';

interface Props {
  title: string;
  elements: React.ReactNode[];
}

const RightList: React.FC<Props> = ({ title, elements }) => {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>
      </Item>

      {elements.map((element, index) => (
        <Item key={index}>{element}</Item>
      ))}
    </Container>
  );
};

export default RightList;