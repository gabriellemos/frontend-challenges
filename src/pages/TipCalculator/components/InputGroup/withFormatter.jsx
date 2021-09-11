import React, { useCallback } from 'react'

const withFormatter = (Component, formatter) => {
  return ({ onChange, ...props }) => {
    const localOnChange = useCallback(
      (value) => {
        onChange(formatter(value))
      },
      [formatter, onChange]
    )

    return <Component {...props} onChange={localOnChange} />
  }
}

export default withFormatter
