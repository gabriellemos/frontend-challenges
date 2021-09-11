import React, { useCallback } from 'react'

const withPattern = (Component, pattern) => {
  return ({ onChange, ...props }) => {
    const localOnChange = useCallback(
      (value) => {
        onChange(value.replace(pattern, ''))
      },
      [pattern, onChange]
    )

    return <Component {...props} onChange={localOnChange} />
  }
}

export default withPattern
