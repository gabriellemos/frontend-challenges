import React from 'react'

import HeaderHero from '../../images/illustration-hero.svg'
import MusicIcon from '../../images/icon-music.svg'

import * as SummaryCard from './styled'
import * as Button from '../Buttons'

const OrderSummary = () => {
  return (
    <SummaryCard.Container>
      <SummaryCard.Header>
        <img src={HeaderHero} alt="summary-hero" />
      </SummaryCard.Header>
      <SummaryCard.Body>
        <h1>Order Summary</h1>
        <h2>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </h2>
        <div className="payment-plan">
          <img src={MusicIcon} alt="music-icon" />
          <div>
            <p className="title">Annual Plan</p>
            <p className="value">$59.99/year</p>
          </div>
          <Button.Terciary>Change</Button.Terciary>
        </div>
      </SummaryCard.Body>
      <SummaryCard.Footer>
        <Button.Primary>Proceed to Payment</Button.Primary>
        <Button.Secondary>Cancel Order</Button.Secondary>
      </SummaryCard.Footer>
    </SummaryCard.Container>
  )
}

export default OrderSummary
