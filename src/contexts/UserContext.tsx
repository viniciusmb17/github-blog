/* eslint-disable camelcase */
import { ReactNode } from 'react'
import { createContext } from 'use-context-selector'
import { useAxios } from '../hooks/useAxios'

interface UserType {
  login: string
  bio: string
  avatar_url: string
  followers: number
  name: string
  html_url: string
  company: string | null
}

interface UserContextProps {
  user: UserType | undefined
  error: string
  isFetching: boolean
}

export const UserContext = createContext({} as UserContextProps)

export function UserProvider({ children }: { children: ReactNode }) {
  const username = 'viniciusmb17'
  const {
    data: user,
    error,
    isFetching,
  } = useAxios<UserType>({
    method: 'GET',
    url: `users/${username}`,
  })

  return (
    <UserContext.Provider value={{ user, error, isFetching }}>
      {children}
    </UserContext.Provider>
  )
}
