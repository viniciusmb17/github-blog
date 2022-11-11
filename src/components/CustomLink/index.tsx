import { CustomLinkContainer } from './style'
import { LinkProps } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'

interface CustomLinkProps extends LinkProps {
  iconAt: 'start' | 'end'
}

export function CustomLink({ to, children, iconAt }: CustomLinkProps) {
  return (
    <CustomLinkContainer to={to}>
      {iconAt === 'start' && <FontAwesomeIcon icon={faChevronLeft} />}
      {children}
      {iconAt === 'end' && <FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
    </CustomLinkContainer>
  )
}
