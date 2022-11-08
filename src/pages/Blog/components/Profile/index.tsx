import {
  InfoItem,
  ProfileAvatar,
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  ProfileInfo,
  ProfileText,
  ProfileTitle,
} from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup, faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from '../../../../components/Link'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileAvatar src="https://github.com/viniciusmb17.png" alt="" />
      <ProfileContent>
        <ProfileHeader>
          <ProfileTitle>Vinicius Barbosa</ProfileTitle>
          <Link href="#">github</Link>
        </ProfileHeader>
        <ProfileText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus,
          deserunt veritatis, nihil enim impedit distinctio doloremque
          reiciendis nam voluptas odio harum eius repellat ipsam esse quia
          dignissimos officiis illum suscipit!
        </ProfileText>
        <ProfileInfo>
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
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  )
}
