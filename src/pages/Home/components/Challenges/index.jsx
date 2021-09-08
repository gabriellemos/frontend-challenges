import React from 'react'

import ChallengeCard from '../ChallengeCard'

const Challenges = () => {
  return (
    <React.Fragment>
      <ChallengeCard
        title="Order summary component"
        description="A perfect project for newbies who are starting to build confidence with layouts!"
        image="https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/ouobx6tvyduidzio7wr7.jpg"
        redirectTo="/order-summary"
      />
    </React.Fragment>
  )
}

export default Challenges
