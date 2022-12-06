import styled from 'styled-components'

export const PostContentContainer = styled.main`
  width: 54rem;
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem;
  gap: 1.5rem;
  line-height: 160%;

  a {
    color: ${(props) => props.theme.blue};
  }
`

export const PostSection = styled.section``

export const CodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  border-radius: 2px;
  font-family: 'Fira Code', monospace;
  line-height: 160%;
  background-color: ${(props) => props.theme['base-post']};
`

export const CodeType = styled.span`
  color: #80abd6;
`
export const CodeValue = styled.span`
  color: #6ad445;
`
export const CodeComment = styled.span`
  color: #4f6173;
`
