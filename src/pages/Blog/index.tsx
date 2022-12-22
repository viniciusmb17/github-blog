import { Profile } from './components/Profile'
import { PostCard } from './components/PostCard'
import {
  BlogContainer,
  BlogSection,
  BlogHeader,
  BlogSearchInput,
  BlogSubtitle,
  BlogPosts,
} from './style'
import { usePostContext } from '../../hooks/usePostContext'

export function Blog() {
  const { isLoading, issues } = usePostContext()

  if (isLoading) {
    return <p>Carregando...</p>
  }

  return (
    <BlogContainer>
      <Profile />
      <BlogSection>
        <BlogHeader>
          <BlogSubtitle>Publicações</BlogSubtitle>
          {issues?.length === 1 ? (
            <span>1 publicação</span>
          ) : (
            <span>{issues?.length} publicações</span>
          )}
        </BlogHeader>
        <BlogSearchInput type="text" placeholder="Buscar conteúdo" />
        <BlogPosts>
          {issues?.map((issue) => (
            <PostCard
              key={issue.id}
              body={issue.body}
              title={issue.title}
              createdAt={new Date(issue.created_at)}
              number={issue.number}
            />
          ))}
        </BlogPosts>
      </BlogSection>
    </BlogContainer>
  )
}
