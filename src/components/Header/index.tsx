import { HeaderContainer } from './style'
import CoverImage from '../../assets/cover_image.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={CoverImage} alt="" />
    </HeaderContainer>
  )
}
