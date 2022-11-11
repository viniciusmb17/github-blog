import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCalendarDay, faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CustomAnchor } from '../../../../components/CustomAnchor'
import { CustomLink } from '../../../../components/CustomLink'
import {
  PostInfoContainer,
  PostInfoHeader,
  PostInfoItem,
  PostInfoList,
  PostInfoTitle,
} from './style'

export function PostInfo() {
  return (
    <PostInfoContainer>
      <PostInfoHeader>
        <CustomLink to=".." relative="path">
          Voltar
        </CustomLink>
        <CustomAnchor href="https://github.com/viniciusmb17">
          Ver no GitHub
        </CustomAnchor>
      </PostInfoHeader>
      <PostInfoTitle>JavaScript data types and data structures</PostInfoTitle>
      <PostInfoList>
        <PostInfoItem>
          <FontAwesomeIcon icon={faGithub} />
          <span>viniciusmb17</span>
        </PostInfoItem>
        <PostInfoItem>
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>Há 1 dia</span>
        </PostInfoItem>
        <PostInfoItem>
          <FontAwesomeIcon icon={faComment} />
          <span>5 comentários</span>
        </PostInfoItem>
      </PostInfoList>
    </PostInfoContainer>
  )
}
