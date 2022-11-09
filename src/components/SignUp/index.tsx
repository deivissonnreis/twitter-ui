import React from 'react';

import { Container,
         Content,
         Buttons,
         LogIn,
         SignUP,
         } from './style';

const SignUp: React.FC = () => {
  return (
    <Container>
        <Content>
            <h1>Don't miss what's happening</h1>
            <h2>People on Twitter are the first to know</h2>
        </Content>
        <Buttons>
            <LogIn>Log in</LogIn>
            <SignUP>Sign up</SignUP>
        </Buttons>
    </Container>

  );
}

export default SignUp;