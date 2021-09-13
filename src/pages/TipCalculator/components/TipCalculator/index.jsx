import React, { useState, useMemo } from 'react'

import * as Styled from './styled'
import InputGroup from '../InputGroup'
import CheckboxGroup from '../CheckboxGroup'
import CustomTip from '../CustomTip'
import Resume from '../Resume'

import IconDollar from '../../images/icon-dollar.svg'
import IconPerson from '../../images/icon-person.svg'
import withFormatter from '../../../../components/Input/withFormatter'
import withPattern from '../../../../components/Input/withPattern'

const NumberInput = withPattern(InputGroup, /\D/gi)
const BillInput = withFormatter(NumberInput, (value) => {
  return (parseInt(value) / 100 || 0).toFixed(2)
})

const TipCalculator = () => {
  const [bill, setBill] = useState('')
  const [splitWith, setSplitWith] = useState('')
  const [customTip, setCustomTip] = useState('0.25')

  const [splitBill, splitTip] = useMemo(() => {
    if (bill && splitWith && customTip) {
      const myBill = parseFloat(bill)
      const tipAmount = myBill * parseFloat(customTip)
      return [
        (myBill + tipAmount) / parseInt(splitWith),
        tipAmount / parseInt(splitWith)
      ]
    }
    return [0, 0]
  }, [bill, splitWith, customTip])

  return (
    <Styled.Container>
      <Styled.MainContent>
        <BillInput
          label="Bill"
          placeholder="0"
          icon={IconDollar}
          setValue={setBill}
          value={bill}
        />
        <div className="selector-tip">
          <label>Selected Tip %</label>
          <CheckboxGroup id="5percent">5%</CheckboxGroup>
          <CheckboxGroup id="10percent">10%</CheckboxGroup>
          <CheckboxGroup id="15percent" checked>
            15%
          </CheckboxGroup>
          <CheckboxGroup id="25percent">25%</CheckboxGroup>
          <CheckboxGroup id="50percent">50%</CheckboxGroup>
          <CustomTip value={customTip} setValue={setCustomTip} />
        </div>
        <NumberInput
          label="Number of People"
          placeholder="0"
          icon={IconPerson}
          setValue={setSplitWith}
          value={splitWith}
        />
      </Styled.MainContent>
      <Styled.ResumeContent>
        <Resume label="Tip Amount" value={splitTip} />
        <Resume label="Total" value={splitBill} />
        <button className="reset">reset</button>
      </Styled.ResumeContent>
    </Styled.Container>
  )
}

export default TipCalculator
