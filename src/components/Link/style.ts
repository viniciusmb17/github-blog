import styled from 'styled-components'

export const LinkContainer = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 1.1875rem;
  padding: 0;
  margin-bottom: 1px;
  gap: 0.5rem;

  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.75rem;
  font-size: 0.75rem;
  line-height: 160%;
  color: ${(props) => props.theme.blue};

  svg {
    width: 0.75rem;
    height: 0.75rem;
    margin-bottom: 1px;
  }

  :hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
`
