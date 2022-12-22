import { useNavigate } from 'react-router-dom'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import ReactMarkdown from 'react-markdown'
import {
  PostCardContainer,
  PostCardHeader,
  PostCardTitle,
  PostCardSpan,
  PostCardText,
} from './style'

interface PostCardProps {
  body: string
  title: string
  createdAt: Date
  number: number
}

export function PostCard({ body, title, createdAt, number }: PostCardProps) {
  const navigate = useNavigate()
  const createdDateFormatted = format(createdAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })
  const createdDateRelativeToNow = formatDistanceToNow(createdAt, {
    locale: ptBR,
    addSuffix: true,
  })
  return (
    <PostCardContainer onClick={() => navigate(`/post/${number}`)}>
      <PostCardHeader>
        <PostCardTitle>{title}</PostCardTitle>
        <PostCardSpan>
          <time title={createdDateFormatted} dateTime={createdAt.toISOString()}>
            {createdDateRelativeToNow}
          </time>
        </PostCardSpan>
      </PostCardHeader>
      <PostCardText>
        <ReactMarkdown>{body}</ReactMarkdown>
      </PostCardText>
    </PostCardContainer>
  )
}
