import styled from 'styled-components'

export const PostInfoContainer = styled.section`
  width: 54rem;
  height: 10.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: -5.5rem;
  padding: 32px;
`

export const PostInfoHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`

export const PostInfoTitle = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-title']};
  margin-bottom: 1rem;
`
export const PostInfoContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const PostInfoList = styled.ul`
  display: flex;
  list-style-type: none;
  column-gap: 1.5rem;
`
export const PostInfoItem = styled.li`
  display: flex;
  column-gap: 0.5rem;
  align-items: center;

  svg {
    color: ${(props) => props.theme['base-label']};
  }
`
