import styled from 'styled-components';
import {ReactComponent as search} from '../../assets/svgs/search.svg'
// import { Search } from '../../styles/Icons';

export const Container = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: min(399px, 100%);
  }
`;

export const Wrapper = styled.div`
  padding: 10px 24px;
  width: min(399px, 100%);
  position: fixed;
  top: 0;
  z-index: 2;
  background: var(--primary);
  max-height: 57px;
`;

export const SearchInput = styled.input`
  width: 72%;
  height: 39px;
  font-size: 14px;
  padding: 0 10px 0 52px;
  border-radius: 19.5px;
  background: var(--dark7);
  outline: none;
  border: none;
  &::placeholder {
    color: var(--dark5);
  }
  ~ svg {
    position: relative;
    top: 8px;
    left: -335px;
    z-index: 1;
  }
  &:focus {
    border: 1px solid var(--twitter);
  }
`;

export const SearchIcon = styled(search)`
  width: 25px;
  height: 25px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 57px 24px 200px;
  margin-top: 3px;
  > div + div {
    margin-top: 15px;
  }
`;

export const CopyRight = styled.div`
    width: 85%;
    font-size: 13px;
    line-height: 15px;
    text-align: left;
    color: var(--dark5);
  
`;