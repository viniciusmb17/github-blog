import styled from 'styled-components'

export const PostContentContainer = styled.main`
  width: 54rem;
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem;
  gap: 1.5rem;
  line-height: 160%;

  a {
    color: ${(props) => props.theme.blue};
  }
`

export const PostSection = styled.section``

export const CodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  border-radius: 2px;
  font-family: 'Fira Code', monospace;
  line-height: 160%;
  background-color: ${(props) => props.theme['base-post']};
`
export const customDracula = {
  'code[class*="language-"]': {
    color: '#AFC2D4',
    background: 'none',
    textShadow: '0 1px rgba(0, 0, 0, 0.3)',
    fontFamily:
      "'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.6',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
  },
  'pre[class*="language-"]': {
    color: '#AFC2D4',
    background: '#112131',
    textShadow: '0 1px rgba(0, 0, 0, 0.3)',
    fontFamily:
      "'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.6',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
    padding: '1rem',
    margin: '0',
    overflow: 'auto',
    borderRadius: '2px',
  },
  ':not(pre) > code[class*="language-"]': {
    background: '#282a36',
    padding: '.1em',
    borderRadius: '2px',
    whiteSpace: 'normal',
  },
  comment: {
    color: '#4f6173',
  },
  prolog: {
    color: '#6272a4',
  },
  doctype: {
    color: '#6272a4',
  },
  cdata: {
    color: '#6272a4',
  },
  punctuation: {
    color: '#AFC2D4',
  },
  '.namespace': {
    Opacity: '.7',
  },
  property: {
    color: '#ff79c6',
  },
  tag: {
    color: '#ff79c6',
  },
  constant: {
    color: '#ff79c6',
  },
  symbol: {
    color: '#ff79c6',
  },
  deleted: {
    color: '#ff79c6',
  },
  boolean: {
    color: '#6ad445',
  },
  number: {
    color: '#6ad445',
  },
  selector: {
    color: '#6ad445',
  },
  'attr-name': {
    color: '#6ad445',
  },
  string: {
    color: '#6ad445',
  },
  char: {
    color: '#6ad445',
  },
  builtin: {
    color: '#6ad445',
  },
  inserted: {
    color: '#6ad445',
  },
  operator: {
    color: '#AFC2D4',
  },
  entity: {
    color: '#AFC2D4',
    cursor: 'help',
  },
  url: {
    color: '#AFC2D4',
  },
  '.language-css .token.string': {
    color: '#AFC2D4',
  },
  '.style .token.string': {
    color: '#AFC2D4',
  },
  variable: {
    color: '#AFC2D4',
  },
  atrule: {
    color: '#f1fa8c',
  },
  'attr-value': {
    color: '#f1fa8c',
  },
  function: {
    color: '#f1fa8c',
  },
  'class-name': {
    color: '#f1fa8c',
  },
  keyword: {
    color: '#80ABD6',
  },
  regex: {
    color: '#ffb86c',
  },
  important: {
    color: '#ffb86c',
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
}
