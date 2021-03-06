import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import { FloatingBack } from './styled'

export default () => {
  const history = useHistory()
  const location = useLocation()

  if (location.pathname === '/') {
    return <React.Fragment />
  }
  return (
    <FloatingBack onClick={() => history.push('/')}>
      <ArrowBackIcon />
    </FloatingBack>
  )
}
