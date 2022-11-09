import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--dark8);
  border-radius: 14px;
`;

export const Item = styled.div`
  padding: 12px 16px;
  & + div {
    border-top: 1px solid var(--dark7);
  }
  &:first-child {
    padding-top: 13px;
  }
  &:last-child {
    padding-bottom: 17px;
  }
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 19px;
`;
