import styled from 'styled-components'

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 26rem;
  height: 16.25rem;
  padding: 2rem;
  gap: 1.25rem;

  background-color: ${(props) => props.theme['base-post']};
  border: 2px solid transparent;
  border-radius: 10px;
  transition: border 0.7s;

  &:hover {
    cursor: pointer;
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`

export const PostCardHeader = styled.header`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
`

export const PostCardTitle = styled.h1`
  display: flex;
  height: 4rem;
  width: 17.6875rem;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 160%;
  color: ${(props) => props.theme['base-title']};
`

export const PostCardSpan = styled.span`
  display: flex;
  min-width: 7.5rem;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 160%;
  justify-content: end;
  text-align: center;

  color: ${(props) => props.theme['base-span']};
`

export const PostCardText = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 1rem;
  line-height: 160%;
`
