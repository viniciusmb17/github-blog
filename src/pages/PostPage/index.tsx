import { PostContent } from './components/PostContent'
import { PostInfo } from './components/PostInfo'
import { PostPageContainer } from './style'

export function PostPage() {
  return (
    <PostPageContainer>
      <PostInfo />
      <PostContent />
    </PostPageContainer>
  )
}
