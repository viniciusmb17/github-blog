import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 54rem;
  height: 13.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: -5.5rem;
  padding: 2.5rem 2rem;
  gap: 2rem;
`
export const ProfileAvatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
`
export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`

export const ProfileTitle = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 130%;

  color: ${(props) => props.theme['base-title']};
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProfileText = styled.p`
  margin-bottom: 1.5rem;
`

export const ProfileInfoList = styled.ul`
  display: flex;
  list-style-type: none;
  column-gap: 1.5rem;
`

export const InfoItem = styled.li`
  display: flex;
  column-gap: 0.5rem;
  align-items: center;

  svg {
    color: ${(props) => props.theme['base-label']};
  }
`
