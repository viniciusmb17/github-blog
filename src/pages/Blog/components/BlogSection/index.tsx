import { PostCard } from '../PostCard'
import {
  BlogHeader,
  BlogPosts,
  BlogSearchInput,
  BlogSectionContainer,
  BlogSubtitle,
} from './style'
import { ChangeEvent } from 'react'
import { useContextSelector } from 'use-context-selector'
import { PostContext } from '../../../../contexts/PostContext'

export function BlogSection() {
  const search = useContextSelector(PostContext, (context) => context.search)
  const setSearchParams = useContextSelector(
    PostContext,
    (context) => context.setSearchParams,
  )

  const issues = useContextSelector(PostContext, (context) => context.issues)
  const isFetchingPosts = useContextSelector(
    PostContext,
    (context) => context.isFetching,
  )
  const error = useContextSelector(PostContext, (context) => context.error)

  if (error) {
    console.log(error)
  }

  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchParams({ q: event.target.value })
  }

  if (isFetchingPosts) {
    return <p>Carregando...</p>
  }

  return (
    <BlogSectionContainer>
      <BlogHeader>
        <BlogSubtitle>Publicações</BlogSubtitle>
        {issues?.length === 1 ? (
          <span>1 publicação</span>
        ) : (
          <span>{issues?.length} publicações</span>
        )}
      </BlogHeader>
      <form>
        <BlogSearchInput
          type="text"
          placeholder="Buscar conteúdo"
          name="search"
          value={search}
          onChange={handleSearchChange}
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
    </BlogSectionContainer>
  )
}
