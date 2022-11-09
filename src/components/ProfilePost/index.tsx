import React, { useState } from 'react';
import Feed from '../Feed';
import img1 from '../../assets/imgs/img2.jpg'
import img2 from '../../assets/imgs/img1.jpg'
import img3 from '../../assets/imgs/img3.jpg'
import img4 from '../../assets/imgs/backgot.jpg'


import profileImg from '../../assets/imgs/avatar.png'
import profilePost1 from '../../assets/imgs/profilePost1.png'
import profilePost2 from '../../assets/imgs/profilePost2.png'

import {
  Container,
  Wrapper,
  Avatar,
  ProfileData,
  Options,
  SourceButton,
  GifButton,
  PollButton,
  EmojiButton,
  SchudleButton,
  TweetButton,
  Buttons,
  BorderToFeed,
  
} from './style';



const ProfilePost: React.FC = () => {

  

  const [imagePost, setImagePost] = useState('')

  const [inputValue, setInputValue] = useState('')

  const [posts, setPosts] = useState([{

    name: 'Devon Lane',
    nick: '@johndue',
    ImageSource: img1,
    discription: 'Thats it!',
    AvatarImage: profilePost1

  },
  { name: 'Darlene Robertson',
    nick: '@darrobi',
    ImageSource: img2,
    discription: 'That is a big HURRY!',
    AvatarImage: profilePost2
  
  },
  {
    name: 'Jerome Bell',
    nick: '@afonsoinocente',
    ImageSource: img1,
    discription: 'it looks amazing!',
    AvatarImage: profileImg

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
  
  ])

  function handleInputChange(event: any){
    setImagePost(URL.createObjectURL(event.target.files[0]) )

  } 

  return (
    <Container>
        <Wrapper>
            <Avatar />
            <ProfileData>
                    <input type="text" placeholder='Whats Happaning?' value={inputValue} onChange={event => setInputValue(event.target.value)}/>
                    <Options>
                        <Buttons>
                            <button>
                              <label htmlFor="files"><SourceButton/></label>
                              <input type="file" onChange={event => handleInputChange(event)} id='files' />
                            </button>

                            <button>
                            <GifButton/>
                            </button>
                            
                            <button>
                            <PollButton/>
                            </button>

                            <button>
                            <EmojiButton/>
                            </button>

                            <button>
                            <SchudleButton/>
                            </button>
                        </Buttons>
                        <TweetButton onClick={() => setPosts([{name:'Jerome Bell', nick:'@afonsoinocente', ImageSource: imagePost, discription: inputValue, AvatarImage: profileImg}, ...posts])}>Tweet</TweetButton>
                    </Options>
            </ProfileData>
      </Wrapper>
      <BorderToFeed/>

      <Feed posts={posts}/>
    </Container>
  );
};


export default ProfilePost;