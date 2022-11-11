import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
  width: 90rem;
  align-items: center;
  background-color: ${(props) => props.theme['base-background']};
`
