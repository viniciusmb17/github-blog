import { Profile } from './components/Profile'
import { Post } from './components/Post'
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
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </BlogPosts>
      </BlogSection>
    </BlogContainer>
  )
}
