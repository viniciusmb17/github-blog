import { Profile } from './components/Profile'
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
        <BlogPosts>Posts...</BlogPosts>
      </BlogSection>
    </BlogContainer>
  )
}
