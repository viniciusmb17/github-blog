/* eslint-disable no-irregular-whitespace */
import { Navigate, useParams } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { PostContext } from '../../contexts/PostContext'
import { PostContent } from './components/PostContent'
import { PostInfo } from './components/PostInfo'
import { PostPageContainer } from './style'

export function PostPage() {
  const { number } = useParams()
  const issues = useContextSelector(PostContext, (context) => context.issues)
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
        htmlUrl={currentIssue.html_url}
      />
      <PostContent content={currentIssue.body} />
    </PostPageContainer>
  )
}
