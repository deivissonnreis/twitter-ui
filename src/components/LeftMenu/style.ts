import styled, { css } from 'styled-components';
import {Link as link} from 'react-router-dom'
import button from '../Buttons';
import {ReactComponent as home} from '../../assets/svgs/home.svg'
import {ReactComponent as explore} from '../../assets/svgs/explore.svg'
import {ReactComponent as notify} from '../../assets/svgs/notify.svg'
import {ReactComponent as messages} from '../../assets/svgs/messages.svg'
import {ReactComponent as bookmarks} from '../../assets/svgs/bookmarks.svg'
import {ReactComponent as lists} from '../../assets/svgs/lists.svg'
import {ReactComponent as profile} from '../../assets/svgs/profile.svg'
import {ReactComponent as more} from '../../assets/svgs/more.svg'
import {ReactComponent as menuPoints} from '../../assets/svgs/menuPoints.svg'
import {ReactComponent as logo} from '../../assets/svgs/icon.svg'
import {ReactComponent as avatar} from '../../assets/svgs/avatar.svg'

export const Container = styled.div`
  display: none;
  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    padding: 9px 19px 20px;
    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const Topside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Logo = styled(logo)`
  width: 41px;
  height: 41px;
  margin-bottom: 20px;
`;

export const Button = styled(button)`
    color: white;
`;


export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  background: none;
  border: none;
  > span {
    display: none;
  }
  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 19px;
      font-weight: bold;
      font-size: 19px;

    }
    padding-right: 15px;
  }
  padding: 8.25px 0;
  outline: 0;
  & + button {
    margin-top: 16.5px;
  }
  & + button:last-child {
    margin-top: 33px;
    width: 40px;
    height: 40px;
    > span {
      display: none;
    }
    @media (min-width: 1280px) {
      width: 100%;
      height: unset;
      > span {
        display: inline;
      }
    }
  }
  cursor: pointer;
  border-radius: 25px;
  &:hover {
    background: var(--gray);
  }
 
`;

const iconCSS = css`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  color: var(--white);
  background: none;
`;

export const HomeIcon = styled(home)`
  ${iconCSS}
`;

export const ExploreIcon = styled(explore)`
  ${iconCSS}
`;

export const NotifyIcon = styled(notify)`
  ${iconCSS}
`;
export const MessagesIcon = styled(messages)`
  ${iconCSS}
`;
export const BookMarkIcon = styled(bookmarks)`
  ${iconCSS}
`;
export const ProfileIcon = styled(profile)`
  ${iconCSS}
`;
export const ListsIcon = styled(lists)`
  ${iconCSS}
`;
export const MoreIcon = styled(more)`
  ${iconCSS}

`;

export const Botside = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

export const Avatar = styled(avatar)`
  width: 39px;
  height: 39px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--gray);
`;

export const ProfileData = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    font-size: 14px;
    > span {
      color: var(--dark5);
    }
  }
`;

export const ExitIcon = styled(menuPoints)`
  display: none;
  @media (min-width: 1280px) {
    display: inline-block;
    width: 25px;
    height: 25px;
    color: var(--white);
    margin-left: 30px;
    cursor: pointer;
  }
`;

interface ILink {
  selected?: boolean;

}

export const Link = styled(link)<ILink>`
    text-decoration: none;
    outline: none;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    color: ${props => props.selected? 'var(--primaryblue)' : 'black'};

    /* &:link{
      color: #000000;

    }
    &:visited{
      color: #000000;

    } */
    >span{
      display: inline;
      margin-left: 19px;
      font-weight: bold;
      font-size: 19px;
    }
   
`;