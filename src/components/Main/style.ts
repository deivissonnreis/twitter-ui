import styled from 'styled-components';
import {ReactComponent as theme} from '../../assets/svgs/ThemeButton.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: min(601px, 100%);
  @media (min-width: 500px) {
    border-left: 1px solid var(--dark7);
    border-right: 1px solid var(--dark7);
  }
`;

export const Header = styled.div`
  z-index: 1;
  position: sticky;
  top: 0;
  padding: 12px 8px 12px 0px;
  border-bottom: 1px solid var(--dark7);
`;

export const ProfileInfo = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
  > strong {
    font-size: 19px;
  }
  > span {
    font-size: 15px;
    color: var(--dark7);

  }
  >button{
      background:none ;
      border: none;
      cursor: pointer;
    }

`;

export const ThemeButton = styled(theme)`
  
`;

export const BorderToFeed = styled.div`
    height: 10px;
    width: 100%;
    background-color: var(--dark8);
    border-bottom: 1px solid var(--dark7);
    border-top: 1px solid var(--dark7);
    
`;