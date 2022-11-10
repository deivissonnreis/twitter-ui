import React from 'react';

import Main from '../../components/Main';
import LeftMenu from '../../components/LeftMenu';
import RightMenu from '../../components/RightMenu';
import SignUp from '../../components/SignUpBar'

import { Container, Wrapper} from './style';

const HomeScreen: React.FC = () => {
  return (
    <Container>
        <Wrapper>
              <LeftMenu selected='home'/>
              <Main/>
              <RightMenu/>
        </Wrapper>
        <SignUp/>
    </Container>
  );
}

export default HomeScreen;