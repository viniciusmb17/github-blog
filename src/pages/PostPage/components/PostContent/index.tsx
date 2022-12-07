import { PostContentContainer, customDracula } from './style'
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism'

export function PostContent({ content }: { content: string }) {
  return (
    <PostContentContainer>
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                style={customDracula}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </PostContentContainer>
  )
}
