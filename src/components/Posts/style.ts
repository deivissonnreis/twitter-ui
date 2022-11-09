import styled, { css } from 'styled-components';
import {ReactComponent as comment} from '../../assets/svgs/comment.svg'
import {ReactComponent as like} from '../../assets/svgs/likeUp.svg'
import {ReactComponent as retweet} from '../../assets/svgs/retweet.svg'
import {ReactComponent as share} from '../../assets/svgs/Share.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 16px;
  border-bottom: 1px solid var(--dark7);
  max-width: 100%;
`;

export const Retweeted = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: var(--dark5);
`;

export const Body = styled.div`
  display: flex;
  margin-top: 3px;
  position: relative;
`;

interface IAvatar{
  AvatarImage: string;
}

export const Avatar = styled.div<IAvatar>`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  flex-shrink: 0;
  background: url(${props => props.AvatarImage});
  position: absolute;
  top: 0;
  left: 0;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  white-space: nowrap;
  > strong {
    margin-right: 5px;
  }
  > span,
  time {
    color: var(--dark5);
  }
  > strong,
  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Dot = styled.div`
  background: var(--dark5);
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;

interface IImageContent{
  ImageSource: string;

}

export const ImageContent = styled.div<IImageContent>`
  margin-top: 12px;
  width: 100%;
  height: min(285px, max(175px, 41vw));
  background: url(${props => props.ImageSource});
  background-size: cover;
  border-radius: 14px;
  cursor: pointer;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 16px 8px;
  width: 100%;
  @media (min-width: 330px) {
    width: 80%;
  }
  > div {
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }

`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  >p{
    margin-left: 8px;

  }

  .like{
    color: red;

  }

`;

const iconCSS = css`
  width: 18px;
  height: 18px;
`;

export const CommentIcon = styled(comment)`
  ${iconCSS}
`;

export const RetweetIcon = styled(retweet)`
  ${iconCSS}
`;

export const LikeIcon = styled(like)`
  ${iconCSS}
`;

export const ShareIcon = styled(share)`
  ${iconCSS}

`;
