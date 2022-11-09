import React from 'react';

import {
    Container,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon,
    ShareIcon,
  } from './style';

  interface Props{
    name: string;
    nick: string;
    ImageSource: string;
    discription: string;
    AvatarImage: string;


  }
  
  const Posts: React.FC<Props> = ({name, nick, ImageSource, discription, AvatarImage }) => {
    return (
      <Container>
  
        <Body>
          <Avatar AvatarImage={AvatarImage}/>
          <Content>
            <Header>
              <strong>{name}</strong>
              <span>{nick}</span>
              <Dot />
              <time>23s</time>
            </Header>
  
            <Description>{discription}</Description>
  
            <ImageContent ImageSource={ImageSource}/>
  
            <Icons>
              <Status>
                <CommentIcon />
                <p>61</p> 
              </Status>
              <Status>
                <RetweetIcon />
                <p>12</p>
              </Status>
              <Status>
                <LikeIcon />
                <p className='like'>6.2K</p>
              </Status>
              <Status>
                <ShareIcon />
                <p >61</p>
              </Status>
            </Icons>
          </Content>
        </Body>
      </Container>
    );
  };

export default Posts;