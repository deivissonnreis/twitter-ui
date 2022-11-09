import React from 'react';
// import img1 from '../../assets/imgs/img2.jpg'

import Posts from '../Posts';

import { Container, Tweets } from './style';

interface IFeed {
  posts:{name: string, nick: string, ImageSource: string, discription: string, AvatarImage: string}[]

}

const Feed: React.FC<IFeed> = ({posts}) => {
  return (
    <Container>
      <Tweets>
        {posts.map(post => <Posts name={post.name} nick={post.nick} ImageSource={post.ImageSource} discription={post.discription} AvatarImage={post.AvatarImage}/>)}
      </Tweets>
    </Container>
  );
};



export default Feed;