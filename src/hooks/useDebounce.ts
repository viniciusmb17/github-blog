import { useCallback, useRef } from 'react'

export function useDebounce(delay = 300, notDelayInFirstTime = true) {
  const isFirstTime = useRef(notDelayInFirstTime)
  const debouncing = useRef<ReturnType<typeof setTimeout>>()

  const debounce = useCallback(
    (func: () => void) => {
      if (isFirstTime.current) {
        isFirstTime.current = false
        func()
      } else {
        if (debouncing.current) {
          clearTimeout(debouncing.current)
        }
        debouncing.current = setTimeout(() => func(), delay)
      }
    },
    [delay],
  )

  return { debounce }
}
