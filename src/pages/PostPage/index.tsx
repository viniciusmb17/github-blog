/* eslint-disable no-irregular-whitespace */
import { Navigate, useParams } from 'react-router-dom'
import { usePostContext } from '../../hooks/usePostContext'
import { PostContent } from './components/PostContent'
import { PostInfo } from './components/PostInfo'
import { PostPageContainer } from './style'

export function PostPage() {
  const { number } = useParams()
  const { issues } = usePostContext()
  const currentIssue = issues
    ? issues.find((issue) => issue?.number === Number(number))
    : null

  if (!currentIssue) {
    return <Navigate to={'/'} />
  }

  return (
    <PostPageContainer>
      <PostInfo
        title={currentIssue.title}
        createdAt={new Date(currentIssue.created_at)}
        comments={currentIssue.comments}
      />
      <PostContent content={currentIssue.body} />
    </PostPageContainer>
  )
}
