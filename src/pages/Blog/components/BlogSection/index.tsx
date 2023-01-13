import { PostCard } from '../PostCard'
import {
  BlogHeader,
  BlogPosts,
  BlogSearchInput,
  BlogSectionContainer,
  BlogSubtitle,
} from './style'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { PostContext } from '../../../../contexts/PostContext'
import { useDebounce } from '../../../../hooks/useDebounce'
import { useEffect, useMemo } from 'react'
import { useSearchIssues } from '../../../../hooks/useSearchIssues'

interface BlogSearchType {
  search: string
}

export function BlogSection() {
  const [searchParams, setSearchParams] = useSearchParams()
  const isLoading = useContextSelector(
    PostContext,
    (context) => context.isLoading,
  )
  const issues = useContextSelector(PostContext, (context) => context.issues)
  const { debounce } = useDebounce(600, true)
  const { register, watch, handleSubmit } = useForm<BlogSearchType>()
  const watchSearch = watch('search')

  const search = useMemo(() => {
    return searchParams.get('q') || ''
  }, [searchParams])

  const searchIssues = useSearchIssues({
    username: 'viniciusmb17',
    repo: 'github-blog',
    q: search,
  })

  const onSubmit: SubmitHandler<BlogSearchType> = (data) => console.log(data)

  useEffect(() => {
    debounce(() => {
      setSearchParams({ q: watchSearch }, { replace: true })
      handleSubmit(onSubmit)
      searchIssues()
    })
  }, [
    debounce,
    handleSubmit,
    searchIssues,
    setSearchParams,
    watch,
    watchSearch,
  ])

  if (isLoading) {
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
    </BlogSectionContainer>
  )
}
