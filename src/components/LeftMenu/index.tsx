import React from 'react';


import {
  Container,
  Topside,
  Logo,
  MenuButton,
  Button,
  HomeIcon,
  ExploreIcon,
  NotifyIcon,
  MessagesIcon,
  ListsIcon,
  BookMarkIcon,
  ProfileIcon,
  MoreIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
  Link,
} from './style';

interface ILeftMenu{
  selected?: string;
}

const LeftMenu: React.FC<ILeftMenu> = ({selected}) => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton >
          <Link to='/feed' selected={selected === 'home'}>
            <HomeIcon />
            <span>Home</span>
         </Link>
        </MenuButton>

        <MenuButton >
          <Link to='/404'>
            <ExploreIcon />
            <span>Explore</span>
          </Link>
        </MenuButton>

        <MenuButton>
          <Link to='/404'>
            <NotifyIcon />
            <span>Notifcations</span>
          </Link>
        </MenuButton>

        <MenuButton>
          <Link to='/404'>
            <MessagesIcon />
            <span>Messages</span>
          </Link>
        </MenuButton>

        <MenuButton>
          <Link to='/404'>
            <BookMarkIcon />
            <span>Bookmarks</span>
          </Link>
        </MenuButton>

        <MenuButton >
          <Link to='/404'>
            <ListsIcon />
            <span>Lists</span>
          </Link>
        </MenuButton>

        <MenuButton  >
          <Link to='/profile' selected={selected === 'profile'}>
              <ProfileIcon />
              <span>Profile</span>
          </Link>
        </MenuButton>

        <MenuButton>
          <Link to='/404'>
            <MoreIcon />
            <span>More</span>
          </Link>
        </MenuButton>

        <Button>
            <span>Tweet</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar />

        <ProfileData>
          <strong>Jerome Bell</strong>
          <span>@afonsoinocente</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
    
  );
};

export default LeftMenu;