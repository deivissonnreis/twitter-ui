import styled from 'styled-components';

import Button from '../Buttons';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
  }
`;

interface IAvatar{
  AvatarImage: string;
}

export const Avatar = styled.div<IAvatar>`
  width: 49px;
  height: 49px;
  background: url(${props => props.AvatarImage});
  border-radius: 50%;
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  > strong {
    font-size: 14px;
  }
  > span {
    font-size: 14px;
    color: var(--dark5);
  }
`;

export const FollowButton = styled(Button)`
  padding: 6px 17px;
`;