import React from 'react';
import img1 from '../../assets/imgs/img2.jpg'
import img2 from '../../assets/imgs/img1.jpg'
import img3 from '../../assets/imgs/img3.jpg'
import img4 from '../../assets/imgs/backgot.jpg'


import profileImg from '../../assets/imgs/avatar.png'
import profilePost1 from '../../assets/imgs/profilePost1.png'
import profilePost2 from '../../assets/imgs/profilePost2.png'


import Posts from '../Posts';

import { Container, Tweets } from './style';

interface IFeed {
  posts:{name: string, nick: string, ImageSource: string, discription: string, AvatarImage: string}[]
  mocked?: boolean;
}

const Feed: React.FC<IFeed> = ({posts, mocked}) => {

  const postMocked = [
  
    {
      name: 'Jerome Bell',
      nick: '@afonsoinocente',
      ImageSource: img1,
      discription: 'Thats it!',
      AvatarImage: profileImg
  
    },
    { name: 'Darlene Robertson',
      nick: '@darrobi',
      ImageSource: img2,
      discription: 'That is a big HURRY!',
      AvatarImage: profilePost1
    
    },
    {
      name: 'Devon Lane',
      nick: '@johndue',
      ImageSource: img1,
      discription: 'it looks amazing!',
      AvatarImage: profilePost2
  
    },
    {
      name: 'Jemmy Allan',
      nick: '@jemall',
      ImageSource: img3,
      discription: 'WOW!',
      AvatarImage: profilePost1
  
  
    },
    {  name: 'Jerome Bell',
    nick: '@afonsoinocente',
    ImageSource: img4,
    discription: 'Pam pam paramrampam!',
    AvatarImage: profileImg
    
    }
    
    ]

  return (
    <Container>
      <Tweets>
        {posts.map((post, index)  => <Posts name={post.name} nick={post.nick} ImageSource={post.ImageSource} discription={post.discription} AvatarImage={post.AvatarImage} key={index}/>)}
        {mocked? postMocked.map((postMocked, index)  => <Posts name={postMocked.name} nick={postMocked.nick} ImageSource={postMocked.ImageSource} discription={postMocked.discription} AvatarImage={postMocked.AvatarImage} key={index}/>) : null}
      </Tweets>
    </Container>
  );
};



export default Feed;