import React from 'react';

import ProfilePost from '../ProfilePost'
import {Link} from 'react-router-dom'

import {
    Container,
    Header,
    ProfileInfo,
    ThemeButton,

  } from './style';
  
  const Main: React.FC = () => {
    return (
      <Container>
        <Header>
          <Link to='/profile'/>
          <ProfileInfo>
            <strong>HOME</strong>
            <button>
            <ThemeButton/>
            </button>
            </ProfileInfo>
        </Header>
        <ProfilePost />
      </Container>
    );
  };
  

export default Main;