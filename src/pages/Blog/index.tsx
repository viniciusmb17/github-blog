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
import { useForm, SubmitHandler } from 'react-hook-form'

interface BlogSearchType {
  search: string
}

export function Blog() {
  const { isLoading, issues } = usePostContext()
  const { register, handleSubmit } = useForm<BlogSearchType>()
  const onSubmit: SubmitHandler<BlogSearchType> = (data) => console.log(data)

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <BlogSearchInput
            type="text"
            placeholder="Buscar conteúdo"
            {...register('search')}
          />
        </form>
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
