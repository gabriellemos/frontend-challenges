import React from 'react'

const PriceDisplay = ({ label, value }) => {
  return (
    <div>
      <div>
        <label>{label}</label>
        <label>/ person</label>
      </div>
      <label>{`$ ${value}`}</label>
    </div>
  )
}

export default PriceDisplay
