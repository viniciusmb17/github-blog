import styled from 'styled-components'

export const BlogContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 90rem;
  align-items: center;
  background-color: ${(props) => props.theme['base-background']};
`
