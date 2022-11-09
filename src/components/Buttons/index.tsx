import styled from 'styled-components';

interface Props {
  outlined?: boolean;
}

export default styled.button<Props>`
  background: ${(props) => (props.outlined ? 'transparent' : 'var(--primaryblue)')};
  color: ${(props) => (props.outlined ? 'var(--primaryblue)' : 'var(--white)')};
  border: ${(props) => (props.outlined ? '1px solid var(--primaryblue)' : 'none')};
  padding: 16px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  outline: 0;
`;