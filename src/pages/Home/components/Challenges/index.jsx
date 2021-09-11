import React from 'react'

import ChallengeCard from '../ChallengeCard'
import * as Styled from './styled'

const Challenges = () => {
  return (
    <Styled.Container>
      <ChallengeCard
        title="Order summary component"
        description="A perfect project for newbies who are starting to build confidence with layouts!"
        image="https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/ouobx6tvyduidzio7wr7.jpg"
        redirectTo="/order-summary"
      />
      <ChallengeCard
        title="Tip calculator app"
        description="This small app is perfect for anyone starting to get to grips with JavaScript. The calculator functionality will be a nice test!"
        image="https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/hxkpctp6cd1meeytfdl2.jpg"
        redirectTo="/tip-calculator"
      />
    </Styled.Container>
  )
}

export default Challenges
