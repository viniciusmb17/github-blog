import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com/',
})

api.interceptors.request.use(async (config) => {
  const token = import.meta.env.VITE_GITHUB_TOKEN

  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
  }

  return config
})
