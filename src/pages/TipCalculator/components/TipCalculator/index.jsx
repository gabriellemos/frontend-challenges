import React, { useState } from 'react'

import * as Styled from './styled'
import InputGroup from '../InputGroup'
import CheckboxGroup from '../CheckboxGroup'
import PriceDisplay from '../PriceDisplay'

import IconDollar from '../../images/icon-dollar.svg'
import IconPerson from '../../images/icon-person.svg'
import withFormatter from '../InputGroup/withFormatter'
import withPattern from '../InputGroup/withPattern'

const NumberInput = withPattern(InputGroup, /\D/gi)
const BillInput = withFormatter(NumberInput, (value) => {
  return (parseInt(value) / 100 || 0).toFixed(2)
})

const TipCalculator = () => {
  const [bill, setBill] = useState('')
  const [splitWith, setSplitWith] = useState('')

  return (
    <Styled.Container>
      <Styled.MainContent>
        <BillInput
          label="Bill"
          placeholder="0"
          icon={IconDollar}
          onChange={setBill}
          value={bill}
        />
        <div className="selector-tip">
          <label>Selected Tip %</label>
          <CheckboxGroup id="5percent">5%</CheckboxGroup>
          <CheckboxGroup id="10percent">10%</CheckboxGroup>
          <CheckboxGroup id="15percent">15%</CheckboxGroup>
          <CheckboxGroup id="25percent">25%</CheckboxGroup>
          <CheckboxGroup id="50percent">50%</CheckboxGroup>
          <div>
            <input />
          </div>
        </div>
        <NumberInput
          label="Number of People"
          placeholder="0"
          icon={IconPerson}
          onChange={setSplitWith}
          value={splitWith}
        />
      </Styled.MainContent>
      <Styled.ResumeContent>
        <PriceDisplay label="Tip Amount" value={0} />
        <PriceDisplay label="Total" value={0} />
        <button>reset</button>
      </Styled.ResumeContent>
    </Styled.Container>
  )
}

export default TipCalculator
