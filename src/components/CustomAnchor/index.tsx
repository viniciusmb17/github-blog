import React from 'react'
import { CustomAnchorContainer } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export function CustomAnchor({
  href,
  children,
}: React.HTMLProps<HTMLAnchorElement>) {
  return (
    <CustomAnchorContainer href={href} target="_blank">
      {children}
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </CustomAnchorContainer>
  )
}
