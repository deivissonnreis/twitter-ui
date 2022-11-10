import React, { useState, useEffect } from 'react';
import Feed from '../Feed';

import profileImg from '../../assets/imgs/avatar.png'

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

  const [imagePost, setImagePost] = useState<string | ArrayBuffer | null>('')

  const [inputValue, setInputValue] = useState('')

  const [posts, setPosts] = useState(localStorage.getItem('posts')? JSON.parse(localStorage.getItem('posts') || '{}')  : [])

  
  

  function handleInputChange(event: any){

    const fr = new FileReader();
    fr.readAsDataURL(event.target.files[0]);
    fr.addEventListener('load', () =>{
      setImagePost(fr.result)

    })

  } 

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  },[posts])

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
                        <TweetButton onClick={() => {

                          if(inputValue !== ''){
                            setPosts([{name:'Jerome Bell', nick:'@afonsoinocente', ImageSource: imagePost, discription: inputValue, AvatarImage: profileImg}, ...posts])
                            setInputValue('');

                          }
                          

                          }}>Tweet</TweetButton>
                    </Options>
            </ProfileData>
      </Wrapper>
      <BorderToFeed/>

      <Feed posts={posts} mocked/>
    </Container>
  );
};


export default ProfilePost;