import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCalendarDay, faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CustomAnchor } from '../../../../components/CustomAnchor'
import { CustomLink } from '../../../../components/CustomLink'
import {
  PostInfoContainer,
  PostInfoHeader,
  PostInfoItem,
  PostInfoList,
  PostInfoTitle,
} from './style'

interface PostInfoProps {
  title: string
  createdAt: Date
  comments: number
}

export function PostInfo({ title, comments, createdAt }: PostInfoProps) {
  const createdDateFormatted = format(createdAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })
  const createdDateRelativeToNow = formatDistanceToNow(createdAt, {
    locale: ptBR,
    addSuffix: true,
  })

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
      <PostInfoTitle>{title}</PostInfoTitle>
      <PostInfoList>
        <PostInfoItem>
          <FontAwesomeIcon icon={faGithub} />
          <span>viniciusmb17</span>
        </PostInfoItem>
        <PostInfoItem>
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>
            <time
              title={createdDateFormatted}
              dateTime={createdAt.toISOString()}
            >
              {createdDateRelativeToNow}
            </time>
          </span>
        </PostInfoItem>
        <PostInfoItem>
          <FontAwesomeIcon icon={faComment} />
          {comments === 1 ? (
            <span>1 comentário</span>
          ) : (
            <span>{comments} comentários</span>
          )}
        </PostInfoItem>
      </PostInfoList>
    </PostInfoContainer>
  )
}
