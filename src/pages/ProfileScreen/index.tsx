import React from 'react';
import LeftMenu from '../../components/LeftMenu'
import RightMenu from '../../components/RightMenu'
import SignUp from '../../components/SignUp'

import img1 from '../../assets/imgs/img2.jpg'
import img2 from '../../assets/imgs/backgot.jpg'

import profileImg from '../../assets/imgs/avatar.png'

import Feed from '../../components/Feed'

import { Container, 
         Wrapper, 
         MenuProfile,
         BackIcon,
         Menu,
         ProfileMain,
         Banner,
         Avatar,
         ProfileData,
         LocationIcon,
         JoinIcon,
         Following,
         EditButton,
         Buttons,
        
        } from './style';

interface IProfileScreen{
    background: string;
}

const ProfileScreen: React.FC<IProfileScreen> = ({background}) => {

    const posts = [{

        name: 'Jerome Bell',
        nick: '@afonsoinocente',
        ImageSource: img1,
        discription: 'it looks amazing!',
        AvatarImage: profileImg
    
      },
      {  name: 'Jerome Bell',
      nick: '@afonsoinocente',
      ImageSource: img2,
      discription: 'Pam pam paramrampam!',
      AvatarImage: profileImg
      
      }]

    return  ( 
        <Container>
            <Wrapper>
                    <LeftMenu selected='profile'/>

                    <ProfileMain>
                            <MenuProfile>
                                <BackIcon/>
                                <Menu>
                                    <h1>Jerome Bell</h1>
                                    <h2>2 Tweets</h2>
                                </Menu>
                            </MenuProfile>

                            <Banner background={background}>
                                <Avatar />
                            </Banner>

                            <ProfileData>
                                <EditButton outlined>Editar perfil</EditButton>

                                <h1>Jerome Bell</h1>
                                <h2>@afonsoinocente</h2>

                                <p>Product Designer</p>

                                <ul>
                                    <li>
                                        <LocationIcon />
                                         London
                                    </li>
                                    <li>
                                        <JoinIcon />
                                        Joined September 2011
                                    </li>
                                </ul>

                                <Following>
                                <span>
                                    <strong>569</strong> <p>Following</p>
                                </span>
                                <span>
                                    <strong>72 </strong> <p>Followers</p>
                                </span>
                                </Following>
                            </ProfileData>

                            <Buttons>
                                <ul>
                                    <li>Tweets</li>
                                    <li>Tweets & replies</li>
                                    <li>Media</li>
                                    <li>Likes</li>
                                </ul>
                            </Buttons>

                            <Feed posts={posts}/>
                    </ProfileMain>

                    <RightMenu/>
            </Wrapper>
            <SignUp/>
        </Container>
);
}

export default ProfileScreen;