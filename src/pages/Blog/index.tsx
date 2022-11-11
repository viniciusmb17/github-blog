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

export function Blog() {
  return (
    <BlogContainer>
      <Profile />
      <BlogSection>
        <BlogHeader>
          <BlogSubtitle>Publicações</BlogSubtitle>
          <span>6 publicações</span>
        </BlogHeader>
        <BlogSearchInput type="text" placeholder="Buscar conteúdo" />
        <BlogPosts>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </BlogPosts>
      </BlogSection>
    </BlogContainer>
  )
}
