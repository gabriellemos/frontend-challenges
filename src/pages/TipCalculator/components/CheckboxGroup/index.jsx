import React from 'react'

const CheckboxGroup = ({ id, children, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{children}</label>
      <input {...props} id={id} type="checkbox" />
    </div>
  )
}

export default CheckboxGroup
