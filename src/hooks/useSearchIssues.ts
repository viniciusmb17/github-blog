import { useCallback } from 'react'
import { useContextSelector } from 'use-context-selector'
import {
  IssueType,
  PostContext,
  SearchIssuesProps,
} from '../contexts/PostContext'
import { api } from '../lib/axios'

export function useSearchIssues({ username, repo, q }: SearchIssuesProps) {
  const setIsLoading = useContextSelector(
    PostContext,
    (context) => context.setIsLoading,
  )
  const setIssues = useContextSelector(
    PostContext,
    (context) => context.setIssues,
  )

  return useCallback(async () => {
    setIsLoading(true)
    try {
      const {
        data: { items },
      }: { data: { items: IssueType[] } } = await api.get(
        `search/issues?q=${q}repo:${username}/${repo}`,
      )
      setIssues(items)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [q, repo, setIsLoading, setIssues, username])
}
