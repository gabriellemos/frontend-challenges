import React from 'react'
import { useHistory } from 'react-router-dom'

import * as Challenge from './styled'

const ChallengeCard = ({ title, description, image, redirectTo }) => {
  const history = useHistory()

  const handleClick = () => {
    history.push(redirectTo)
  }

  return (
    <Challenge.Container onClick={handleClick}>
      <Challenge.Header>
        <img src={image} alt="summary-hero" />
      </Challenge.Header>
      <Challenge.Body>
        <h1>{title}</h1>
        <p>{description}</p>
      </Challenge.Body>
    </Challenge.Container>
  )
}

export default ChallengeCard
