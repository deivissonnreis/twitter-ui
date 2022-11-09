import styled, {css} from 'styled-components';
import button from '../../components/Buttons';
import {ReactComponent as profileImg} from '../../assets/svgs/avatar.svg'
import {ReactComponent as location} from '../../assets/svgs/location.svg'
import {ReactComponent as join} from '../../assets/svgs/join.svg'
import {ReactComponent as backIcon} from '../../assets/svgs/backIcon.svg'

export const Container = styled.div`
  background: var(--primary);
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

/*-------------------ProfileScreen END------------------------ */

export const ProfileMain = styled.div`
  display: flex;
  flex-direction: column;
  width: min(601px, 100%);
  @media (min-width: 500px) {
    border-left: 1px solid var(--dark7);
    border-right: 1px solid var(--dark7);
  }

`;

export const MenuProfile = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 24px;
  border-bottom: 1px solid var(--dark5);
  position: sticky;
  z-index: 1;
  top: 0;

`;
export const BackIcon = styled(backIcon)`
  margin-right: 42px;
  cursor: pointer;
`;
export const Menu = styled.div`
  
  >h1{
    font-weight: bold;
    font-size: 19px;
    margin-bottom: 5px;
  }
  >h2{
    font-size: 13px;
    color: var(--dark5);
  }

`;

interface IBanner{
  background: string;
}

export const Banner = styled.div<IBanner>`
  flex-shrink: 0;
  width: 100%;
  height: min(33vw, 199px);
  background: url(${props => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

export const Avatar = styled(profileImg)`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));
  border: 4px solid black;
  background: var(--dark5);
  border-radius: 50%;
  position: absolute;
  bottom: max(-3.1vw, -50px);
  left: 15px;
`;

export const ProfileData = styled.div`
  padding: min((10vw + 7px), 67px) 16px 0;
  display: flex;
  flex-direction: column;
  position: relative;
  > h1 {
    font-weight: bold;
    font-size: 19px;
  }
  > h2 {
    font-weight: normal;
    font-size: 15px;
    color: var(--dark5);
  }
  > p {
    font-size: 15px;
    margin-top: 11px;
    
  }
  > ul {
    display: flex;
    margin-bottom: 10px;
    margin-top: 16px;
    > li {
      margin-right: 16px ;
      font-size: 15px;
      color: var(--dark5);
     
    }
  }
`;

const iconCSS = css`
  width: 20px;
  height: 20px;
  margin-right: 4px;
  color: var(--gray);
`;

export const LocationIcon = styled(location)`
  ${iconCSS}
`;
export const JoinIcon = styled(join)`
  ${iconCSS}
`;

export const Following = styled.div`
  display: flex;
  > span {
    font-size: 15px;
    color: var(--dark5);
    display: flex;
    >strong{
      color: black;
      font-weight: bold;
      margin-right: 4px
    }
    & + span {
      margin-left: 20px;
    }
  }
`;

export const EditButton = styled(button)`
  position: absolute;
  right: 7px;
  padding: 4px 16px;
  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
  }
  `;

export const Buttons = styled.div`
    margin-top: 12px;
    border-bottom: 1px solid var(--dark7);
    font-weight: bold;
    color: var(--dark5);

    >ul{
      display: flex;
      justify-content: space-between;
      flex-wrap: nowrap;
      flex-shrink: 0;
      >li{
        padding: 28px 38px ;
        &:first-child{
          color: var(--primaryblue);
          border-bottom: 2px solid var(--primaryblue);
        }
      }

    }
  `;