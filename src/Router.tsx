import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Blog } from './pages/Blog'
import { PostPage } from './pages/PostPage'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="post/1" element={<PostPage />} />
      </Route>
      <Route path="*" element={<h1>Página não encontrada (404)</h1>} />
    </Routes>
  )
}
