import { ReactNode, useState, Dispatch, SetStateAction } from 'react'
import { createContext } from 'use-context-selector'

export interface User {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

export interface Reactions {
  url: string
  total_count: number
  laugh: number
  hooray: number
  confused: number
  heart: number
  rocket: number
  eyes: number
}

export interface IssueType {
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  id: number
  node_id: string
  number: number
  title: string
  user: User
  labels: any[]
  state: string
  locked: boolean
  assignee?: any
  assignees: any[]
  milestone?: any
  comments: number
  created_at: Date
  updated_at: Date
  closed_at?: any
  author_association: string
  active_lock_reason?: any
  body: string
  reactions: Reactions
  timeline_url: string
  performed_via_github_app?: any
  state_reason?: any
}

export interface SearchIssuesProps {
  q: string
  username: string
  repo: string
}

interface PostContextProps {
  issues: IssueType[] | null
  isLoading: boolean
  setIssues: Dispatch<SetStateAction<IssueType[] | []>>
  setIsLoading: Dispatch<SetStateAction<boolean>>
}
export const PostContext = createContext({} as PostContextProps)

export function PostProvider({ children }: { children: ReactNode }) {
  const [issues, setIssues] = useState<IssueType[] | []>([])
  const [isLoading, setIsLoading] = useState(false)

  return (
    <PostContext.Provider
      value={{ issues, isLoading, setIssues, setIsLoading }}
    >
      {children}
    </PostContext.Provider>
  )
}
