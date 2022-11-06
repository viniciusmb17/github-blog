import styled from 'styled-components'

export const BlogContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 90rem;
  align-items: center;
`

export const ProfileInfo = styled.section`
  width: 54rem;
  height: 13.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: -5.5rem;
  padding: 40px 32px;
  gap: 32px;
`
export const ProfileAvatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
`
export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  h1 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
  }
`

export const ProfileContent = styled.div`
  ul {
    display: flex;
    list-style-type: none;
    gap: 1rem;
  }
`
