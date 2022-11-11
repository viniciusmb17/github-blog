import { CustomLinkContainer } from './style'
import { LinkProps } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export function CustomLink({ to, children }: LinkProps) {
  return (
    <CustomLinkContainer to={to}>
      <FontAwesomeIcon icon={faChevronLeft} />
      {children}
    </CustomLinkContainer>
  )
}
