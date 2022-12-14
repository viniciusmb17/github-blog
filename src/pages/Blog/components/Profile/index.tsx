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

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileAvatar src="https://github.com/viniciusmb17.png" alt="" />
      <ProfileContent>
        <ProfileHeader>
          <ProfileTitle>Vinicius Barbosa</ProfileTitle>
          <CustomAnchor href="https://github.com/viniciusmb17">
            GitHub
          </CustomAnchor>
        </ProfileHeader>
        <ProfileText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus,
          deserunt veritatis, nihil enim impedit distinctio doloremque
          reiciendis nam voluptas odio harum eius repellat ipsam esse quia
          dignissimos officiis illum suscipit!
        </ProfileText>
        <ProfileInfoList>
          <InfoItem>
            <FontAwesomeIcon icon={faGithub} />
            <span>viniciusmb17</span>
          </InfoItem>
          <InfoItem>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Empresa</span>
          </InfoItem>
          <InfoItem>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>5 seguidores</span>
          </InfoItem>
        </ProfileInfoList>
      </ProfileContent>
    </ProfileContainer>
  )
}
