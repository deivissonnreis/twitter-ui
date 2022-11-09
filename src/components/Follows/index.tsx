import React from 'react';

import { Container, 
         Avatar, 
         Info, 
         FollowButton } from './style';

interface Props {
  name: string;
  nick: string;
  AvatarImage: string;
}

const Follows: React.FC<Props> = ({ name, nick, AvatarImage }) => {
  return (
    <Container>
      <div>
        <Avatar AvatarImage={AvatarImage} />
        <Info>
          <strong>{name}</strong>
          <span>{nick}</span>
        </Info>
      </div>

      <FollowButton outlined>Follow</FollowButton>
    </Container>
  );
};

export default Follows;