import React from 'react'

import * as Styled from './styled'
import Input from '../../../../components/Input'
import withPattern from '../../../../components/Input/withPattern'

const NumberInput = withPattern(Input, /\D/gi)

const CustomTip = ({ value, setValue }) => {
  return (
    <Styled.Container>
      <NumberInput placeholder="Custom" value={value} setValue={setValue} />
    </Styled.Container>
  )
}

export default CustomTip
