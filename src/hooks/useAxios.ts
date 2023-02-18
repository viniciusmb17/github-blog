import { RawAxiosRequestHeaders } from 'axios'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { api } from '../lib/axios'
import { useDebounce } from './useDebounce'

interface ConfigProps {
  url: string
  method: string
  headers?: RawAxiosRequestHeaders | null
  params?: {
    q: string
  } | null
}

export function useAxios<T = unknown>({
  url,
  method,
  params = null,
  headers = null,
}: ConfigProps): {
  data: T | undefined
  error: string
  isFetching: boolean
} {
  const [data, setData] = useState<T>()
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState('')

  const { debounce } = useDebounce(500)

  const q = useMemo(() => params?.q || '', [params?.q])

  const sendRequest = useCallback(() => {
    const configApi = q ? { url, method, params: { q } } : { url, method }

    debounce(() =>
      api(configApi)
        .then((response) => {
          setError('')
          setData(response.data)
        })
        .catch((error) => {
          setError(error.message)
        })
        .finally(() => {
          setIsFetching(false)
        }),
    )
  }, [debounce, method, q, url])

  useEffect(() => {
    sendRequest()
  }, [sendRequest])

  // try {
  //   if (!isFetching) {
  //     return
  //   }
  //   console.log('real fetching data', url, isFetching)
  //   const response = await api.get(url, options)
  //   setData(response.data)
  // } catch (err) {
  //   setError(err)
  // } finally {
  //   setIsFetching(false)
  // }

  // useEffect(() => {
  //   debounce(() =>
  //     api
  //       .get(url, options)
  //       .then((response) => {
  //         console.log(response.data)
  //         setData(response.data)
  //       })
  //       .catch((err) => {
  //         setError(err)
  //       })
  //       .finally(() => {
  //         setIsFetching(false)
  //       }),
  //   )
  // }, [debounce, url, options])

  return { data, error, isFetching }
}
