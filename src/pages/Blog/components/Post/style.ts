import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 26rem;
  height: 16.25rem;
  padding: 2rem;
  gap: 1.25rem;

  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
`

export const PostHeader = styled.header`
  display: flex;
  align-items: baseline;
`

export const PostTitle = styled.h1`
  display: flex;
  height: 4rem;
  width: 17.6875rem;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 160%;
  color: ${(props) => props.theme['base-title']};
`

export const PostSpan = styled.span`
  display: flex;
  width: 3.3125rem;
  white-space: nowrap;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 160%;

  color: ${(props) => props.theme['base-span']};
`

export const PostText = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 1rem;
  line-height: 160%;
`
