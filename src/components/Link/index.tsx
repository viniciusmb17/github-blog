import React from 'react'
import { LinkContainer } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export function Link({ href, children }: React.HTMLProps<HTMLAnchorElement>) {
  return (
    <LinkContainer href={href}>
      {children}
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </LinkContainer>
  )
}
