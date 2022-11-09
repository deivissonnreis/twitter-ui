import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../RightList';
import Follows from '../Follows';
import New from '../New';

import new1 from '../../assets/imgs/new1.png'
import new2 from '../../assets/imgs/new2.png'
import new3 from '../../assets/imgs/new3.png'

import follow1 from '../../assets/imgs/follow1.png'
import follow2 from '../../assets/imgs/follow2.png'

import {
  Container,
  Wrapper,
  SearchInput,
  SearchIcon,
  Body,
  CopyRight,
} from './style';

const RightMenu: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <SearchInput placeholder="Search Twitter" />
        <SearchIcon />
      </Wrapper>

      <StickyBox>
        <Body>
          <List
            title="What's Happening"
            elements={[
                <New text='England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic' 
                time='Last Night' 
                trend='#covid19' 
                what='COVID19'
                ImageContente={new1}
                />,
                <New text='Parler may go offline following suspensions by Amazon, Apple and Google' 
                time='4h Ago' 
                trend='#trump' 
                what='US news'
                ImageContente={new2}
                
                />,
                <New text='India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test' 
                time='1h Ago' 
                trend='#sport' 
                what='India'
                ImageContente={new3}
                
                />,
               
            ]}
          />
          <List
            title="Who to follow"
            elements={[
              <Follows name='Bessie Cooper' nick='@alessandroveronezi' AvatarImage={follow1}/>,
              <Follows name='Jenny Wilson' nick='@gabrielcantarin' AvatarImage={follow2}/>
            ]}
          />
          
        <CopyRight>
            <h1>
                Terms of Service Privacy Policy Cookie Policy
                Ads info More © 2021 Twitter, Inc.
            </h1>
        </CopyRight>
        </Body>
      </StickyBox>
    </Container>
  );
};

export default RightMenu;