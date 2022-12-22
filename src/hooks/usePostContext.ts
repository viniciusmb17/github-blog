import { useContext } from 'react'
import { PostContext } from '../contexts/PostContext'

export const usePostContext = () => useContext(PostContext)
