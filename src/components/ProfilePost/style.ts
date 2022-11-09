import styled from 'styled-components';
import { ReactComponent as gif } from '../../assets/svgs/GIF.svg';
import { ReactComponent as emoji } from '../../assets/svgs/Emoji.svg';
import { ReactComponent as media } from '../../assets/svgs/Media.svg';
import { ReactComponent as poll } from '../../assets/svgs/Poll.svg';
import { ReactComponent as schudle } from '../../assets/svgs/Schudle.svg';
import { ReactComponent as avatar } from '../../assets/svgs/avatar.svg';


import Button from '../Buttons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;

`;
export const Wrapper = styled.div`
  display: flex;
  max-height: 100%;
  padding: 12px 16px;
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;

`;

export const Avatar = styled(avatar)`
  width: max(48px, min(58px, 22vw));
  height: max(48px, min(58px, 22vw));
  border-radius: 50%;
  flex-shrink: 0;
`;

export const ProfileData = styled.div`
  width: 100%;
  padding: 12px 0 8px 12px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  >input{
    border: none;
    outline: none;
    height: 50px;
    &::placeholder{
        height: 30px;
        font-size: 20px;

    }
  }
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: min(250px, max(175px, 25%));

    >button{
        background: none;
        border: none;
        cursor: pointer;

        >label{
          cursor: pointer;
        }

        >input {
          display:none;
          cursor: pointer;
      }
    }

    
    
`;
export const SourceButton = styled(media)`
    
`;
export const GifButton = styled(gif)`

`;
export const EmojiButton = styled(emoji)`

`;
export const PollButton = styled(poll)`

`;
export const SchudleButton = styled(schudle)`

`;

export const TweetButton = styled(Button)`
    color: var(--primary);
    
`;

export const BorderToFeed = styled.div`
    width: 100%;
    height: 8px;
    background-color: var(--dark8);
    border-top: 1px solid var(--dark7);
    border-bottom: 1px solid var(--dark7);

`;

