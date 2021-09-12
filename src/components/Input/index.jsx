import React from 'react'

const Input = ({ setValue, ...props }) => {
  const handleChange = (evt) => {
    if (setValue) {
      setValue(evt.target.value)
    }
  }

  return <input {...props} onChange={handleChange} />
}

export default Input
