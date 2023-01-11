import styled from 'styled-components'

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 72px;
  padding-bottom: 14.625rem;
`
export const BlogSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 54rem;

  form {
    display: flex;
  }
`

export const BlogHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 0.875rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-span']};
  }
`

export const BlogSubtitle = styled.h2`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 160%;
  color: ${(props) => props.theme['base-subtitle']};
`

export const BlogSearchInput = styled.input`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0.75rem 1rem;
  margin-top: 1.5rem;
  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};

  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;
  line-height: 160%;

  ::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  :focus {
    border: 1px solid ${(props) => props.theme.blue};
  }
`

export const BlogPosts = styled.main`
  margin-top: 3.75rem;
  display: grid;
  grid-template-columns: auto auto;
  gap: 2rem;
`
