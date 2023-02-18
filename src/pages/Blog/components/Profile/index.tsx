import {
  InfoItem,
  ProfileAvatar,
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  ProfileInfoList,
  ProfileText,
  ProfileTitle,
} from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup, faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { CustomAnchor } from '../../../../components/CustomAnchor'
import { useContextSelector } from 'use-context-selector'
import { UserContext } from '../../../../contexts/UserContext'

export function Profile() {
  const user = useContextSelector(UserContext, (context) => context.user)
  const isFetchingUser = useContextSelector(
    UserContext,
    (context) => context.isFetching,
  )

  if (isFetchingUser) {
    return <p>Carregando...</p>
  }

  return (
    <ProfileContainer>
      <ProfileAvatar src={user?.avatar_url} alt="" />
      <ProfileContent>
        <ProfileHeader>
          <ProfileTitle>{user?.name}</ProfileTitle>
          <CustomAnchor href={user?.html_url}>GitHub</CustomAnchor>
        </ProfileHeader>
        <ProfileText>{user?.bio}</ProfileText>
        <ProfileInfoList>
          <InfoItem>
            <FontAwesomeIcon icon={faGithub} />
            <span>{user?.login}</span>
          </InfoItem>
          {user?.company && (
            <InfoItem>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{user.company}</span>
            </InfoItem>
          )}
          <InfoItem>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{user?.followers} seguidores</span>
          </InfoItem>
        </ProfileInfoList>
      </ProfileContent>
    </ProfileContainer>
  )
}
