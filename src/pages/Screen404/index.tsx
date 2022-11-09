import React from 'react';

import { Container,
         Logo,
        } from './style';

const Screen404: React.FC = () => {
  return (
    <Container>
        <Logo/>
        <h1>404. Page was not founded.</h1>
    </Container>
  );
}

export default Screen404;