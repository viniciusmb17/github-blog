import { BlogSection } from './components/BlogSection'
import { Profile } from './components/Profile'
import { BlogContainer } from './style'

export function Blog() {
  return (
    <BlogContainer>
      <Profile />
      <BlogSection />
    </BlogContainer>
  )
}
