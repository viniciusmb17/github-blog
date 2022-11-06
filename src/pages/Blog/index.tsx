import {
  BlogContainer,
  ProfileAvatar,
  ProfileContent,
  ProfileHeader,
  ProfileInfo,
} from './style'

export function Blog() {
  return (
    <BlogContainer>
      <ProfileInfo>
        <ProfileAvatar src="https://github.com/viniciusmb17.png" alt="" />
        <ProfileContent>
          <ProfileHeader>
            <h1>Vinicius Barbosa</h1>
            <a href="#">GITHUB</a>
          </ProfileHeader>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus,
            deserunt veritatis, nihil enim impedit distinctio doloremque
            reiciendis nam voluptas odio harum eius repellat ipsam esse quia
            dignissimos officiis illum suscipit!
          </p>
          <ul>
            <li>viniciusmb17</li>
            <li>Empresa</li>
            <li>5 seguidores</li>
          </ul>
        </ProfileContent>
      </ProfileInfo>
      GitHub Blog
    </BlogContainer>
  )
}
