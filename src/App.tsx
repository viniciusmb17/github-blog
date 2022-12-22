import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { PostProvider } from './contexts/PostContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PostProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PostProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
