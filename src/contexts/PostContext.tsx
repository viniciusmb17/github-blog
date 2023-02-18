import { ReactNode, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { createContext } from 'use-context-selector'
import { useAxios } from '../hooks/useAxios'

export interface IssueType {
  id: string
  body: string
  title: string
  created_at: Date
  number: number
  comments: number
}

interface PostContextProps {
  issues: IssueType[] | null
  error: string
  isFetching: boolean
  search: string
  setSearchParams: ({ q }: { q: string }) => void
}

export const PostContext = createContext({} as PostContextProps)

interface DataProps {
  items: IssueType[]
}

const username = 'viniciusmb17'
const repo = 'github-blog'

export function PostProvider({ children }: { children: ReactNode }) {
  const [searchParams, setSearchParams] = useSearchParams()

  const search = useMemo(() => {
    return searchParams.get('q') || ''
  }, [searchParams])

  const { data, error, isFetching } = useAxios<DataProps>({
    method: 'GET',
    url: 'search/issues',
    params: {
      q: `${search}is:issue repo:${username}/${repo}`,
    },
  })

  const issues = data?.items || null

  return (
    <PostContext.Provider
      value={{
        issues,
        error,
        isFetching,
        search,
        setSearchParams,
      }}
    >
      {children}
    </PostContext.Provider>
  )
}
