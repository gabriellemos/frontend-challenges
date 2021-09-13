import React from 'react'

import * as Styled from './styled'

const Resume = ({ label, value }) => {
  return (
    <Styled.Container>
      <div>
        <label className="title">{label}</label>
        <label className="subtitle">/ person</label>
      </div>
      <label className="value">${value.toFixed(2)}</label>
    </Styled.Container>
  )
}

export default Resume
